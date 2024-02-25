import type { Actions } from './$types';
import { writeFileSync } from "fs"

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
      const images= data.getAll("images")
      
        console.log(images)
        for (let file  of images) {
            
            const fileToUpload = file  as File
            writeFileSync(`static/${fileToUpload.name}`, Buffer.from(await fileToUpload.arrayBuffer()));
             
        }
            
        return {} ;
    }
} satisfies Actions;
