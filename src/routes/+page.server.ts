import { fail, json } from '@sveltejs/kit';
import { writeFileSync } from 'node:fs';
import { extname } from 'path';
import type { Actions } from './$types';
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
      const images= data.getAll("images")
      try {
        for (let file  of images) {
            
            const fileToUpload = file as File
             const filename = `${crypto.randomUUID()}${extname(fileToUpload?.name)}`
            writeFileSync(`static/${filename}`, Buffer.from(await fileToUpload.arrayBuffer()));
             
        }
            
        return json({mesage: "cool"}) ;
      } catch (error) {
        console.log(error)
        return fail(500,{mesage: error}) ;
        
      }
        
    }
} satisfies Actions;
