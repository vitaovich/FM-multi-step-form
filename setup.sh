#! /bin/bash
PROJECTDIR=$(basename $(pwd))
GITURL=$(git config --get remote.origin.url)
resourceGroup="MyResourceGroup"
location="westus"

sed -i "s/starter-nextjs-tailwindcss/$PROJECTDIR/" package.json package-lock.json README.md

npm install

git add .
git commit -a -m "setup initial"
git push

# az login

if [ $(az group exists --name $resourceGroup) = false ]; then 
   az group create --name $resourceGroup --location "$location" 
else
   echo $resourceGroup
fi

if [[ $(az staticwebapp list --resource-group $resourceGroup --query "[?name=='$PROJECTDIR'] | length(@)") > 0 ]]
then
  echo "Static Web App for $PROJECTDIR exists"
else
  echo "Static Web App for $PROJECTDIR doesn't exist creating now."
  az staticwebapp create -n $PROJECTDIR -g $resourceGroup -s $GITURL -l WestUs2 -b main --login-with-github
fi

git pull