import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Agent {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
}


interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
    >
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>{agent.name}</CardTitle>
          <CardDescription>{agent.category} - {agent.pricingModel}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{agent.description}</p>
          <p className="mt-2 text-sm font-medium">Status: {agent.status}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

