import { compileLocalTemplate } from '@resoc/create-img'
import { FacebookOpenGraph } from '@resoc/core'
import path from 'path'

const socialImage = async (title, description, baseName) => {
  const ogImage = await compileLocalTemplate(
    'resoc-template/resoc.manifest.json', {
      title,
      description
    },
    FacebookOpenGraph,
    `public/open-graph/${baseName}-{{ hash }}.jpg`,
    { cache: true }
  );

  return {
    title,
    description,
    ogImage: path.basename(ogImage)
  }
};

export default socialImage;
