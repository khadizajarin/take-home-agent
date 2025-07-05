import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'public', 'mock-agents.json');
  try {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    console.log('Raw JSON data from API:', jsonData); // Debug
    const agents = JSON.parse(jsonData);
    console.log('Parsed agents from API:', agents); // Debug
    res.status(200).json(agents);
  } catch (error) {
    console.error('Error reading mock-agents.json:', error);
    res.status(500).json({ error: 'Failed to load agents' });
  }
}