import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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

export function AgentCard({ agent }: AgentCardProps) {
  return (
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
  );
}
