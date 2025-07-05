import { GetServerSideProps } from 'next';

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
    <div>
      <h1>ArkLab AI Agents Catalog</h1>
      <ul>
        {agents.map((agent) => (
          <li key={agent.id}>
            {agent.name} - {agent.description} (Status: {agent.status})
          </li>
        ))}
      </ul>
    </div>
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
