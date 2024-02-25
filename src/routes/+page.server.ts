import { writeFileSync } from 'node:fs';
import { extname } from 'path';
import type { Actions } from './$types';
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
      const images= data.getAll("images")
      
        for (let file  of images) {
            
            const fileToUpload = file as File
             const filename = `${crypto.randomUUID()}${extname(fileToUpload?.name)}`
            writeFileSync(`static/${filename}`, Buffer.from(await fileToUpload.arrayBuffer()));
             
        }
            
        return {msg:"cool"};
    }
} satisfies Actions;
