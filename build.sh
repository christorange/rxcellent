pwd = $(cd $(dirname $0); pwd)

npm install
echo "npm install outer package" 

# build front-end
cd "${pwd}/rxcellent-frontend"
npm install 
npm run build
echo "fron-end done" 


# build back-end
cd "${pwd}/rxcellent-backend"
npm install 
npm run build
echo "fron-end done" 
