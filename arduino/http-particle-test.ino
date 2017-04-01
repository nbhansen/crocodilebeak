#include "application.h"
#include "HttpClient/HttpClient.h"

/**
* Declaring the variables.
*/
unsigned int nextTime = 0;    // Next time to contact the server
HttpClient http;

// Headers currently need to be set at init, useful for API keys etc.
http_header_t headers[] = {
    //  { "Content-Type", "application/json" },
    //  { "Accept" , "application/json" },
    { "Accept" , "*/*"},
    { NULL, NULL } // NOTE: Always terminate headers will NULL
};


const String host = "particle-logger.dk";
const String path = "/motor/position/latest/data";
const int port = 80;

http_request_t request;
http_response_t response;

void setup() {
    Serial.begin(9600);
}

void loop() {
    if (nextTime > millis()) {
        return;
    }
    // Request path and body can be set at runtime or at setup.
    request.hostname = host;
    request.port = port;
    request.path = path;

    // The library also supports sending a body with your request:
    //request.body = "{\"key\":\"value\"}";

    // Get request
    http.get(request, response, headers);

    String body = response.body;
    String strippedBody = body.replace("\"", "");
    int data = strippedBody.toInt();
    Serial.println(data);

    nextTime = millis() + 10000;
}
