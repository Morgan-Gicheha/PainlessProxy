lls
# PainlessProxy API Gateway Documentation

Welcome to PainlessProxy! 🚀 Your gateway to effortless microservices management. Our core concept is simplicity, making it a breeze to connect and handle microservices, even those with callbacks. Forget about the complexities of managing callbacks in the gateway; PainlessProxy automatically routes them to the right microservice, giving you a painless experience. 🎯

This approach may seem simple, but it has the potential to solve a multitude of problems.  Join us in simplifying microservices management with PainlessProxy! 🌟


## Basic Idea

The core concept behind our API Gateway is to streamline the process of connecting and managing microservices. Here are the fundamental components of this concept:
![Screenshot from 2023-09-27 21-13-23](https://github.com/Morgan-Gicheha/PainlessProxy/assets/51116440/36eaed58-1b18-4b08-9c6e-3c65b86e7034)


### Microservice Key Generation

- we will have some sort of registry that stores the data for each microservice, i.e port and base-path

#### Callback Handling

- When a callback request is received, it includes the service ID as part of the URL.
    `http://api.gatewat.com/gateway/callback/<str:serviceID>`

#### Response

- The callback endpoint always returns a JSON response: `{"response":"OK"}`.

## Loggingg
How we will handle logs
![Screenshot from 2023-09-27 20-55-14](https://github.com/Morgan-Gicheha/PainlessProxy/assets/51116440/09d672e7-f42e-4012-beac-ea89e28dcfdd)



#### internal Micro-service Response

- All responses to microservices configured in the gatway should always return HTTP response  of `2xx`


#### For Asycnronous Tasks, we will use RabbitMQ.
Message Queues to be used:
* LOGS - for all loading purposes




#### Fomart of API Activity logs to be maintained across all micro-services
- all will emit in json (json-string)
```json
{
  "service-name": "example-service",
  "log-level": "info",
  "timestamp": "2024-01-17T12:34:56.789Z",
  "message": "This is a log message",
  "correlation-id": "521d4298-76d4-4006",
  "IP-address": "x.x.x.x",
  "additional-details": {}
}
```

#### Available service names for use in logging
- gateway - this is the api gateway
- 
