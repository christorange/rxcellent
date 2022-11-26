pwd = $(cd $(dirname $0); pwd)

npm install
echo "general dependencies installed" 

# build front-end
cd "${pwd}./rxcellent-frontend"
npm install 
#npm run build
echo "frontend dependencies installed" 


# build back-end
cd "${pwd}./rxcellent-backend"
npm install 
#npm run build
echo "backend dependencies installed" 
