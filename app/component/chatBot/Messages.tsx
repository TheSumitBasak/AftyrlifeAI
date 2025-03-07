import Message from "./Message";

export default function Messages({ messages }: { messages: any[] }) {
  return (
    <section className="flex flex-col-reverse flex-grow-1">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </section>
  );
}
