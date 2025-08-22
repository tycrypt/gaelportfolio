#!/bin/bash

# RUN ./buildAndCopy.sh to execute this 
# Step 1: Build the Three.js project using Vite
echo "Building Three.js project..."
cd logo3Js || exit 1
npm run build || exit 1

# Step 2: Copy the build output to your portfolio folder
echo "Copying build to portfolio..."
rm -rf ../threeScene
mkdir -p ../threeScene
cp -r dist/* ../threeScene/

# Step 3: Go back to portfolio root
cd || exit 1


echo " Done! changes are now live in the iframe."
