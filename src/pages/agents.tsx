import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { AgentCard } from '@/components/AgentCard';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Navbar } from '../components/Navbar';
import Head from "next/head";
import { useMemo } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { motion } from "framer-motion";


interface Agent {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
}

interface Props {
  agents: Agent[];
}

export default function AgentsPage({ agents }: Props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  // ✅ all hooks run on every render
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPricing, setSelectedPricing] = useState<string>("");

  const dynamicDescription = useMemo(() => {
    let desc = "Browse the latest AI agents on ArkLab.";
    if (searchQuery) desc += ` Searching for "${searchQuery}".`;
    if (selectedStatuses.length > 0) desc += ` Statuses: ${selectedStatuses.join(", ")}.`;
    if (selectedCategories.length > 0) desc += ` Categories: ${selectedCategories.join(", ")}.`;
    if (selectedPricing) desc += ` Pricing model: ${selectedPricing}.`;
    return desc;
  }, [searchQuery, selectedStatuses, selectedCategories, selectedPricing]);

  // Handle auth-related conditional rendering here **after hooks**
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/"); // or wherever you want unauthenticated users to go
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // Get unique status and category options dynamically
  const statusOptions = Array.from(new Set(agents.map((a) => a.status)));
  const categoryOptions = Array.from(new Set(agents.map((a) => a.category)));
  const pricingOptions = Array.from(new Set(agents.map((a) => a.pricingModel)));

  const handleStatusChange = (value: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedStatuses([]);
    setSelectedCategories([]);
    setSelectedPricing("");
  };

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatuses.length === 0 || selectedStatuses.includes(agent.status);

    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(agent.category);

    const matchesPricing =
      selectedPricing === "" || agent.pricingModel === selectedPricing;

    return matchesSearch && matchesStatus && matchesCategory && matchesPricing;
  });




  return (
    <>
     <Head>
        <title>ArkLab AI Agents Catalog</title>
        <meta name="description" content={dynamicDescription} />
      </Head>

      <Navbar/>
      <main className="max-w-7xl mx-auto p-6">
        <div className='flex justify-between w-full'>
          <div className='w-1/2'>
            <h1 className="text-4xl font-bold mb-2">ArkLab AI Agents</h1>
            <p className="text-gray-500 mb-8">Browse and filter the latest AI agents by status, category, and pricing.</p>
          </div>
          
         {/* Search and Filter Controls */}
          <div className='w-1/2'>
          <Input
            placeholder="Search agents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          </div>
        </div>
        
        <div className="grid gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3 text-black">
        {/* Status Filter */}
        <div className="bg-white  p-4 rounded-xl shadow space-y-2 ">
          <h2 className="font-semibold text-lg mb-2 text-black" >Status</h2>
          {statusOptions.map((status) => (
          <div key={status} className="flex items-center space-x-2 mb-1">
          <Checkbox
          id={`status-${status}`}
          checked={selectedStatuses.includes(status)}
          onCheckedChange={() => handleStatusChange(status)}
          />
          <label htmlFor={`status-${status}`} className="text-sm" style={{ color: 'black' }}>{status}</label>
         </div>
         ))}
        </div>

        {/* Category Filter */}
        <div className="bg-white p-4 rounded-xl shadow space-y-2">
         <h2 className="font-semibold text-lg mb-2">Category</h2>
         {categoryOptions.map((category) => (
         <div key={category} className="flex items-center space-x-2 mb-1">
         <Checkbox
          id={`category-${category}`}
          checked={selectedCategories.includes(category)}
          onCheckedChange={() => handleCategoryChange(category)}
         />
         <label htmlFor={`category-${category}`} className="text-sm text-black">{category}</label>
         </div>
         ))}
        </div>

        {/* Pricing Model Filter */}
        <div className="bg-white p-4 rounded-xl shadow space-y-2">
        <h2 className="font-semibold text-lg mb-2">Pricing</h2>
        <RadioGroup
         value={selectedPricing}
         onValueChange={setSelectedPricing}
         className="space-y-2"
         >
         {pricingOptions.map((pricing) => (
         <div key={pricing} className="flex items-center space-x-2">
         <RadioGroupItem value={pricing} id={`pricing-${pricing}`} />
         <label htmlFor={`pricing-${pricing}`} className="text-sm">{pricing}</label>
         </div>
         ))}
         </RadioGroup>
        </div>

        </div>
        
      

        {/* Clear Filters Button */}
        <Button onClick={clearFilters} variant="secondary" className="mb-6 w-full md:w-auto">
          Clear All Filters
        </Button>

        {/* Agents List */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredAgents.length > 0 ? (
            filteredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))
          ) : (
            <p>No agents match your filters.</p>
          )}
        </div> </motion.div>
      </main>
    </>

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
