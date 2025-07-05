import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'mock-agents.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const agents = JSON.parse(jsonData);
    res.status(200).json(agents);
  } catch (error) {
    console.error('Error reading mock-agents.json:', error);
    res.status(500).json({ error: 'Failed to load agents' });
  }
}
