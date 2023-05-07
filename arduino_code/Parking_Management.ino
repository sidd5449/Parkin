#include <WiFiNINA.h>
#include <ArduinoJson.h>
#include <Arduino_JSON.h>

const char* ssid ="vivo-1906";
const char* password = "Siddhesh@5449";

WiFiServer server(80);

int trigger_pin1 = 4; // or any other available digital pin
int trigger_pin2 = 5;
int echo_pin[] = {6, 7, 8, 9, 10, 11}; // or any other available digital pins

int MIN_DISTANCE = 200;

StaticJsonDocument<512> doc;
JsonArray array = doc.to<JsonArray>();

void setup() {
  Serial.begin(115200);
 

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("System initialized!");

  // begin the server
  server.begin();
  printWifiStatus();
  
  // initialize the parking slot array
  for (int i = 0; i < 6; i++) {
    JsonObject obj = array.createNestedObject();
    obj["id"] = i + 1;
    obj["occupied"] = 0;  // Initially, all slots are unoccupied
    pinMode(echo_pin[i], INPUT);
  }
  pinMode(trigger_pin1, OUTPUT);
  pinMode(trigger_pin2, OUTPUT);
}

void loop() {
  // Check the status of all 6 parking slots
  // for (int i = 0; i < 6; i++) {
  //   int distance = getDistance(trigger_pin, echo_pin[i]);
  //   if (distance < MIN_DISTANCE) {
  //     array[i]["occupied"] = 1;
  //   } else {
  //     array[i]["occupied"] = 0;
  //   }
  // }

  int distance = getDistance(trigger_pin1, echo_pin[0]);
  if (distance < MIN_DISTANCE) {
    array[0]["occupied"] = 1;
  } else {
    array[0]["occupied"] = 0;
  }

  delay(50);

  distance = getDistance(trigger_pin2, echo_pin[1]);
  if (distance < MIN_DISTANCE) {
    array[1]["occupied"] = 1;
  } else {
    array[1]["occupied"] = 0;
  }


  // Convert the JSON object to a string
  String dataStr;
  serializeJson(array, dataStr);
  Serial.println(dataStr);

  // Listen for incoming clients
  WiFiClient client = server.available();
  // client.setNoDelay(1);
  
  if (client) {
    Serial.println("new client");

    // an HTTP request ends with a blank line
    boolean currentLineIsBlank = true;
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        Serial.write(c);

        // if you've gotten to the end of the line (received a newline
        // character) and the line is blank, the HTTP request has ended,
        // so you can send a reply
        if (c == '\n' && currentLineIsBlank) {
          // send a standard HTTP response header
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close");        // the connection will be closed after completion of the response
          client.println("Refresh: 5");               // refresh the page automatically every 5 sec
          client.println();

          // output the value of each slot and its status
          client.print(dataStr);

          break;
        }

        if (c == '\n') {
          // you're starting a new line
          currentLineIsBlank = true;
        } else if (c != '\r') {
          // you've gotten a character on the current line
          currentLineIsBlank = false;
        }
      }
    }

    // give the web browser time to receive the data
    delay(1); // mili second delay

    // close the connection:
    client.stop();
    Serial.println("client disconnected");
  }
}

int getDistance(int trigPin, int echoPin) {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  unsigned long duration = pulseIn(echoPin, HIGH);

  // Convert the duration to distance
  float distance = duration * 0.034 / 2;

  // Return the distance in centimeters
  return distance;
}

void printWifiStatus() {
  
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your board's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
}