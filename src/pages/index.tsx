import { GetServerSideProps } from 'next';
import { AgentCard } from '../components/AgentCard';
interface Agent {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
}

export default function Home({ agents }: { agents: Agent[] }) {
  return (
    <main>
      <h1>ArkLab AI Agents Catalog</h1>
      <div className='grid grid-cols-2 space-x-1'>
        {agents.map((agent) => (
          <div key={agent.id}>
             <AgentCard key={agent.id} agent={agent} />
          </div>
        ))}
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const host = context.req.headers.host;
    const res = await fetch(`${protocol}://${host}/mock-agents.json`);
    if (!res.ok) throw new Error(`Failed to fetch agents: ${res.statusText}`);
    const agents = await res.json();
    return { props: { agents } };
  } catch (error) {
    console.error('Error fetching agents:', error);
    return { props: { agents: [] } };
  }
};
