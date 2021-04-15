export const AzureServices = [
  {
    title: 'Events',
    description: 'Azure services for Event supports',
    icon: 'event',
    services: [
      {
        title: 'Azure Storage Queues',
        image: 'https://imgur.com/sugyXgH.png',
        description: 'multiple sender and single receiver',
        tags: ['Command'],
        content: 'Use this if you need simple queueing mechanism. Sender and receiver are decuoupled. Each mesage is processed by one receiver only. However, many sender can put the message on queue. Message must be string. The Maximum size of message 64KB. Azure Storage will provide the transaction logs for each message. All of the Azure Storage features will be available here.',
      },
      {
        title: 'Azure Service Bus Queues',
        image: 'https://imgur.com/Zy7AlUJ.png',
        description:
          'multiple sender and single receiver, order is guarrenty, de-duplicate of messages taken care',
        tags: ['Command'],
      },
      {
        title: 'Azure Service Bus Topics',
        image: 'https://imgur.com/dgA2sa6.png',
        description: 'multiple sender and multiple receiver',
        tags: ['Command'],
      },
      {
        title: 'Azure Event Grid',
        image: 'https://imgur.com/4Bjtt2P.png',
        description:
          'subscribe to an event and push that event as message to other systems',
        tags: ['Facts', 'Discrete Data'],
      },
      {
        title: 'Event Hub',
        image: 'https://imgur.com/OgmoG8k.png',
        description:
          'Ingest massive amount of messages, store them for while and you can process them further.',
      },
      {
        title: 'Azure IoT Hub',
        image: 'https://imgur.com/U2XxfKO.png',
        description:
          'Connect to IoT devices send-receive messages, check device health etc.',
        tags: ['Command', 'Facts', 'Stream of Data'],
      },
      {
        title: 'Azure Logic Apps',
        image: 'https://imgur.com/QMxdEri.png',
        description:
          'Orchestrate services and control workflow by connecting many services. It can be triggered by Event Grid',
        tags: ['Command'],
      },
      {
        title: 'Azure SignlaR',
        image: 'https://imgur.com/ECmoTiZ.png',
        description:
          'Real-time push notifications to all connected client including web and mobile apps',
        tags: ['Command', 'Facts', 'Discrete Data'],
      },
      {
        title: 'Azure Notification Hub',
        image: 'https://imgur.com/DHQT0CJ.png',
        description:
          'Real-time push notifications to various platforms, protocols, devices including iOS.',
      },
      {
        title: 'Service Bus Relay',
        image: 'https://imgur.com/MBrIirK.png',
        description:
          'connect to resources on-premises and send-receive messages. It also helps queues and topics to work.',
      },
    ],
  },
  {
    title: 'Data Storage',
    description: 'Storing Data options in Azure',
    icon: 'data',
  },
];
