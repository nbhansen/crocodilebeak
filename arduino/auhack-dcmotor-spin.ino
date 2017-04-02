
#include "application.h"
#include "HttpClient/HttpClient.h"

unsigned int nextTime = 0;    // Next time to contact the server
HttpClient http;

// Headers currently need to be set at init, useful for API keys etc.
http_header_t headers[] = {
    //  { "Content-Type", "application/json" },
    //  { "Accept" , "application/json" },
    { "Accept" , "*/*"},
    { NULL, NULL } // NOTE: Always terminate headers will NULL
};

const String host = "207.154.197.158";
const String path = "/product";
const int port = 80;

http_request_t request;
http_response_t response;

#define enablePin  D7   // Connects to the RFID's ENABLE pin
#define rxPin      RX  // Serial input (connects to the RFID's SOUT pin)
#define txPin      11  // Serial output (unused)
#define BUFSIZE    11  // Size of receive buffer (in bytes) (10-byte unique ID + null character)
#define RFID_START  0x0A  // RFID Reader Start and Stop bytes
#define RFID_STOP   0x0D
int motorPin = D1;
bool badproduct = false;

// Wait for a response from the RFID Reader
  // See Arduino readBytesUntil() as an alternative solution to read data from the reader
char rfidData[BUFSIZE];  // Buffer for incoming data
char offset = 0;         // Offset into buffer


void setup()  // Set up code called once on start-up
{
     // define pin modes
    pinMode(enablePin, OUTPUT);
    digitalWrite(enablePin, HIGH);  // disable RFID Reader
  
    // set the baud rate for the SoftwareSerial port
    Serial.begin(2400);
    Serial1.begin(2400);

    //set pinmode for the motor
    pinMode(motorPin, OUTPUT);
    digitalWrite(enablePin, LOW);   // enable the RFID Reader
    rfidData[0] = 0;         // Clear the buffer
}
  
void loop()  // Main code, to run repeatedly
{
  /* 
    When the RFID Reader is active and a valid RFID tag is placed with range of the reader,
    the tag's unique ID will be transmitted as a 12-byte printable ASCII string to the host
    (start byte + ID + stop byte)
    
    For example, for a tag with a valid ID of 0F0184F07A, the following bytes would be sent:
    0x0A, 0x30, 0x46, 0x30, 0x31, 0x38, 0x34, 0x46, 0x30, 0x37, 0x41, 0x0D
    
    We'll receive the ID and convert it to a null-terminated string with no start or stop byte. 
  */   

    if (Serial1.available() > 0) // If there are any bytes available to read, then the RFID Reader has probably seen a valid tag
    {
      rfidData[offset] = Serial1.read();  // Get the byte and store it in our buffer
      if (rfidData[offset] == RFID_START)    // If we receive the start byte from the RFID Reader, then get ready to receive the tag's unique ID
      {
        offset = -1;     // Clear offset (will be incremented back to 0 at the end of the loop)
      }
      else if (rfidData[offset] == RFID_STOP)  // If we receive the stop byte from the RFID Reader, then the tag's entire unique ID has been sent
      {
        rfidData[offset] = 0; // Null terminate the string of bytes we just received
        return;                // Break out of the loop
      }
      offset++;  // Increment offset into array
      if (offset >= BUFSIZE) 
      {
          offset = 0;
      } // If the incoming data string is longer than our buffer, wrap around to avoid going out-of-bounds
      String tagString = rfidData;
      bool test_food = check_rfid(tagString); // see below - because we dont use the rfid-string-rewrite to use rfidData as a String when we get "real" data
      Serial.println(test_food);
      if (test_food == true){
          GodNoDontEatThis();
          clearBuffer();
      }
        
        
        //Serial.println(rfidData);       // The rfidData string should now contain the tag's unique ID with a null termination, so display it on the Serial Monitor
    }
    //Serial.println(rfidData); 
//test and return a bool dependent on whether the rfid is triggered
    
}

//tries to send a sensual OH YES PLEASE signal to the servo, clearly distinguishable from the two short hard bursts used by GodNoDontEatThis()

void iWouldLoveThisFood(){
    digitalWrite(motorPin, HIGH);
    delay(1000); 
    digitalWrite(motorPin, LOW);
}

//angrily throws two short bursts of spins on the servo - note that the spindown time of the servo means that
//the delays needs to be quite short
void GodNoDontEatThis(){
    digitalWrite(motorPin, HIGH);
    delay(500); 
    digitalWrite(motorPin, LOW);
    
}

void clearBuffer() {
    for (int i=0; i<BUFSIZE; i++) {
        rfidData[i] = 0;
    }
}

bool check_rfid(String rfid_id) { 
    if (rfid_id.startsWith("01068DDEE2")) {
        return true;
    }
    else {
        return false;
    }

    // Request path and body can be set at runtime or at setup.
    /* request.hostname = host;
    request.port = port;
    request.path = path+"/"+rfid_string;

    // The library also supports sending a body with your request:
    //request.body = "{\"key\":\"value\"}";

    // Get request
    http.get(request, response, headers);

    String body = response.body;
    String strippedBody = body.replace("\"", "");
    return strippedBody.startsWith("true");
    */
}