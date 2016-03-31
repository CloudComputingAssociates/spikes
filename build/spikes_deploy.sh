#!/bin/bash
# env vars
message = "Env vars... "
echo message

DEV = "/home/dev/webs"
message = "DEV: "
message += $DEV
echo message

JENKINS_HOME = "/var/lib/jenkins"
message = "JENKINS_HOME: "
message += $JENKINS_HOME
echo message

# nuke everything in DEV
echo "Nuke everything ..."
rm -rfv ${DEV}

# Spikes - typescript HelloWorld example, 1-page app
message = "Moving typescript HelloWorld example ..."
echo message
mkdir {$DEV}/HelloWorld
cp ${JENKINS_HOME}/jobs/Spikes/workspace/typescript/HelloWorld/HelloWorld/app.cs ${DEV}/HelloWorld/
cp ${JENKINS_HOME}/jobs/Spikes/workspace/typescript/HelloWorld/HelloWorld/app.js ${DEV}/HelloWorld/
cp ${JENKINS_HOME}/jobs/Spikes/workspace/typescript/HelloWorld/HelloWorld/index.html ${DEV}/HelloWorld/
echo "done."

