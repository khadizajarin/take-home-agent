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
  console.log('Rendered agents in component:', agents); // Debug
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
    const headers: { Cookie?: string } = {};
    if (context.req && context.req.headers.cookie) {
      headers.Cookie = context.req.headers.cookie;
    }
    console.log('Attempting to fetch from /api/agents'); // Debug
    const res = await fetch('http://localhost:3000/api/agents', { headers });
if (!res.ok) throw new Error(`Failed to fetch agents: ${res.statusText}`);
const agents = await res.json();
console.log('Fetched agents:', agents);
return { props: { agents } };

  } catch (error) {
    console.error('Error fetching agents:', error);
    return { props: { agents: [] } };
  }
};