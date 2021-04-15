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
        content:
          `<p><img src="https://imgur.com/sugyXgH.png" alt="" class="align-left">
Use this if you need <strong>simple queueing mechanism</strong>. Sender and receiver are decoupled. Each message is processed by <strong>one receiver only</strong>. However, <strong>many sender can put the message</strong> on queue. Message must be <strong>string</strong> only. You can convert complex message into <code class="language-plaintext highlighter-rouge">JSON</code>. The Maximum size of message <strong>64KB</strong>. Azure Storage will provide the <strong>transaction logs</strong> for each message. All of the Azure Storage features will be available here.</p>`,
      },
      {
        title: 'Azure Service Bus Queues',
        image: 'https://imgur.com/Zy7AlUJ.png',
        description:
          'multiple sender and single receiver, order is guarrenty, de-duplicate of messages taken care',
        tags: ['Command'],
        content:
          `<p><img src="https://imgur.com/Zy7AlUJ.png" alt="" class="align-left">
Use this as <code class="language-plaintext highlighter-rouge">advance queueing mechanism</code>. One <code class="language-plaintext highlighter-rouge">ore more applications can put the message</code> on the queue but still <code class="language-plaintext highlighter-rouge">only one</code> application can recive the message from queue. Message consists <code class="language-plaintext highlighter-rouge">key/value</code> properties. Like <code class="language-plaintext highlighter-rouge">customer="Microsoft"</code> and <code class="language-plaintext highlighter-rouge">id="23"</code>. Message contains <code class="language-plaintext highlighter-rouge">body</code> that is <code class="language-plaintext highlighter-rouge">binary data</code> so it can contain any data like <code class="language-plaintext highlighter-rouge">image, json, text</code>. Message size <code class="language-plaintext highlighter-rouge">256KB -1MB</code>. <code class="language-plaintext highlighter-rouge">Dead-letter sub-queue</code> is there where timed-out or poisoned messages can be placed. It gives duplicate message detection feature out of the box.</p>`,
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
