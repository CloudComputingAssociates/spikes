#!/bin/bash
# env vars
message="Env vars... "
echo $message

DEV="/home/dev/webs"
message="DEV: "
message+=$DEV
echo $message

JENKINS_HOME="/var/lib/jenkins"
message="JENKINS_HOME: "
message+=$JENKINS_HOME
echo $message

# nuke everything under DEV
echo "Nuke everything ..."
rm -rfv $DEV
# re-create dev/webs dir
mkdir $DEV

# Spikes 

# Landing Page: deploy single Page
cp $JENKINS_HOME/jobs/Spikes/workspace/Landing ${DEV}/HelloWorld/

# Spike: typescript example, 1-page app (HellowWorld)
message="Moving typescript HelloWorld example ..."
echo $message
# re-create
mkdir $DEV/HelloWorld
# move only files needed for website
cp $JENKINS_HOME/jobs/Spikes/workspace/typescript/HelloWorld/HelloWorld/app.css ${DEV}/HelloWorld/
cp $JENKINS_HOME/jobs/Spikes/workspace/typescript/HelloWorld/HelloWorld/app.js ${DEV}/HelloWorld/
cp $JENKINS_HOME/jobs/Spikes/workspace/typescript/HelloWorld/HelloWorld/index.html ${DEV}/HelloWorld/

echo "done."

