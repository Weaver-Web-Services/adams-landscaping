import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hello! 👋 Welcome to Adams Landscaping. How can I help you today? I can answer questions about our services, provide estimates, or help you schedule a consultation.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Service-related responses
    if (lowerMessage.includes("hardscaping") || lowerMessage.includes("patio") || lowerMessage.includes("retaining wall")) {
      return "Great! We offer comprehensive hardscaping services including patios, retaining walls, fire pits, and outdoor kitchens. All our work is done with premium materials and expert craftsmanship. Would you like to know more about a specific service or get an estimate?";
    }

    if (lowerMessage.includes("softscaping") || lowerMessage.includes("garden") || lowerMessage.includes("planting")) {
      return "Excellent choice! Our softscaping services include professional garden design, native plant selection, and sod installation. We specialize in creating beautiful, sustainable landscapes. What type of garden are you interested in?";
    }

    if (lowerMessage.includes("maintenance") || lowerMessage.includes("lawn care") || lowerMessage.includes("snow")) {
      return "We provide year-round maintenance services including weekly lawn care, seasonal cleanups, irrigation maintenance, and 24/7 emergency snow removal. Would you like to set up a maintenance plan?";
    }

    // Pricing-related responses
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("estimate")) {
      return "Our pricing varies based on the scope of your project. I'd recommend using our pricing calculator on the website for a quick estimate, or you can contact us directly at (410) 555-1234 for a detailed quote. What type of project are you considering?";
    }

    // Contact-related responses
    if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email")) {
      return "You can reach us at:\n📞 (410) 555-1234\n📧 info@adamslandscaping.com\n\nOur hours are Mon-Fri 8am-6pm, Sat 9am-4pm. We also offer emergency snow removal 24/7!";
    }

    // Booking-related responses
    if (lowerMessage.includes("book") || lowerMessage.includes("schedule") || lowerMessage.includes("appointment")) {
      return "I'd love to help you schedule a consultation! You can book directly through our website or call us at (410) 555-1234. We offer free consultations for all new projects. What service are you interested in?";
    }

    // About-related responses
    if (lowerMessage.includes("about") || lowerMessage.includes("history") || lowerMessage.includes("company")) {
      return "Adams Landscaping has been serving Baltimore County and City since 2006. We're built on hard work, integrity, and a commitment to the community. With nearly 20 years of experience, we've transformed thousands of outdoor spaces. Would you like to learn more about our services?";
    }

    // Lead capture
    if (lowerMessage.includes("interested") || lowerMessage.includes("ready") || lowerMessage.includes("let's")) {
      return "That's wonderful! I'd love to help you get started. To provide you with the best service, could you tell me:\n1. What's your name?\n2. What type of project are you interested in?\n3. What's the best way to contact you?";
    }

    // Default response
    return "Thank you for your interest! I can help you with information about our hardscaping, softscaping, and maintenance services, provide estimates, or help you schedule a consultation. What would you like to know more about?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: getBotResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition z-40"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] shadow-2xl rounded-lg overflow-hidden z-40">
      <Card className="border-0">
        {/* Header */}
        <CardHeader className="bg-emerald-600 text-white">
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> Adams Landscaping Support
            </CardTitle>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-emerald-700 p-1 rounded transition"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </CardHeader>

        {/* Messages */}
        <CardContent className="p-4 h-96 overflow-y-auto bg-slate-50 space-y-4">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.type === "user"
                    ? "bg-emerald-600 text-white rounded-br-none"
                    : "bg-white text-slate-900 border border-slate-200 rounded-bl-none"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <p className={`text-xs mt-1 ${message.type === "user" ? "text-emerald-100" : "text-slate-500"}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-slate-900 border border-slate-200 px-4 py-2 rounded-lg rounded-bl-none">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>

        {/* Input */}
        <div className="p-4 border-t border-slate-200 bg-white">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="bg-emerald-600 hover:bg-emerald-700 p-2"
              size="sm"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-slate-500 mt-2">💬 Available 24/7 to help with your landscaping needs</p>
        </div>
      </Card>
    </div>
  );
}
