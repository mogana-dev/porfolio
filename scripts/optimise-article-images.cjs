const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const imageDirectory = path.join(
  process.cwd(),
  "public",
  "images",
  "articles"
);

const files = [
  "nextjs-performance-seo.webp",
  "product-engineering-beyond-code.webp",
  "rbac-with-supabase.webp",
  "saas-concept-to-production.webp",
  "accounting-erp-platforms.webp",
  "bilingual-digital-products-europe.webp",
  "business-operations-to-software.webp",
  "marketplace-platforms-that-scale.webp",
];

const backupDirectory = path.join(
  imageDirectory,
  "original-backup"
);

async function optimiseImage(filename) {
  const sourcePath = path.join(imageDirectory, filename);
  const temporaryPath = path.join(
    imageDirectory,
    `optimised-${filename}`
  );
  const backupPath = path.join(
    backupDirectory,
    filename
  );

  if (!fs.existsSync(sourcePath)) {
    console.warn(`Missing: ${filename}`);
    return;
  }

  fs.mkdirSync(backupDirectory, {
    recursive: true,
  });

  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(sourcePath, backupPath);
  }

  const originalSize = fs.statSync(sourcePath).size;
  const metadata = await sharp(sourcePath).metadata();

  await sharp(sourcePath)
    .resize({
      width: 1600,
      height: 900,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality: 84,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(temporaryPath);

  const optimisedSize =
    fs.statSync(temporaryPath).size;

  if (optimisedSize < originalSize) {
    fs.renameSync(temporaryPath, sourcePath);

    const saved =
      originalSize - optimisedSize;

    console.log(
      `Optimised: ${filename}`
    );

    console.log(
      `  ${metadata.width}×${metadata.height}`
    );

    console.log(
      `  ${(originalSize / 1024).toFixed(1)} KB → ${(optimisedSize / 1024).toFixed(1)} KB`
    );

    console.log(
      `  Saved ${(saved / 1024).toFixed(1)} KB`
    );
  } else {
    fs.unlinkSync(temporaryPath);

    console.log(
      `Kept original: ${filename} was already smaller`
    );
  }
}

async function run() {
  for (const filename of files) {
    await optimiseImage(filename);
  }

  console.log(
    "\nArticle image optimisation complete."
  );

  console.log(
    `Backups: ${backupDirectory}`
  );
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
