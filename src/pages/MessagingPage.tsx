import React, { useState } from "react";

interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  isTeacher?: boolean;
}

interface Message {
  id: number;
  sender: "teacher" | "student";
  content: string;
  timestamp: string;
}

const mockConversations: Conversation[] = [
  {
    id: 1,
    name: "Formateur - Marie Dupont",
    lastMessage: "Bonjour, comment puis-je vous aider ?",
    isTeacher: true,
  },
  {
    id: 2,
    name: "Groupe Data Science",
    lastMessage: "On se voit demain pour le projet ?",
    isTeacher: false,
  },
  {
    id: 3,
    name: "Étudiant - Jean Martin",
    lastMessage: "Merci pour les infos !",
    isTeacher: false,
  },
];

const mockMessages: Message[] = [
  {
    id: 1,
    sender: "teacher",
    content: "Bonjour, comment puis-je vous aider ?",
    timestamp: "10:00",
  },
  {
    id: 2,
    sender: "student",
    content:
      "J’ai une question sur le dernier cours, pouvez-vous clarifier la partie sur les algorithmes ?",
    timestamp: "10:05",
  },
  {
    id: 3,
    sender: "teacher",
    content: "Bien sûr, quelle partie vous pose problème exactement ?",
    timestamp: "10:06",
  },
];

const MessagingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(mockConversations[0]);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState("");

  const filteredConversations = mockConversations.filter((convo) =>
    convo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMsg: Message = {
        id: messages.length + 1,
        sender: "student",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <div className="messaging-container">
      <div className="conversations-panel">
        <div className="search-container">
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ul className="conversations-list">
          {filteredConversations.map((convo) => (
            <li
              key={convo.id}
              className={selectedConversation?.id === convo.id ? "active" : ""}
              onClick={() => setSelectedConversation(convo)}
            >
              <h4>{convo.name}</h4>
              <p>{convo.lastMessage}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-panel">
        {selectedConversation && (
          <>
            <div className="chat-header">
              <h2>{selectedConversation.name}</h2>
            </div>
            <div className="chat-messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message-bubble ${
                    msg.sender === "teacher" ? "teacher" : "student"
                  }`}
                >
                  <p>{msg.content}</p>
                  <span className="timestamp">{msg.timestamp}</span>
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="Écrire un message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button onClick={handleSendMessage}>Envoyer</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MessagingPage;
