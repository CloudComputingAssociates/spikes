#!/bin/bash
# env vars
echo "Env vars... "
set DEV = '/home/dev/webs'
echo "DEV: {$DEV}"
set JENKINS_HOME = '/var/lib/jenkins'
echo "JENKINS_HOME: {$JENKINS_HOME}"

# nuke everything in DEV
echo "Nuke everything ..."
rm -rfv ${DEV}

# Spikes - typescript HelloWorld example, 1-page app
echo "Moving typescript HelloWorld example ..."
mkdir {$DEV}/HelloWorld
cp ${JENKINS_HOME}/jobs/Spikes/workspace/typescript/HelloWorld/HelloWorld/app.cs ${DEV}/HelloWorld/
cp ${JENKINS_HOME}/jobs/Spikes/workspace/typescript/HelloWorld/HelloWorld/app.js ${DEV}/HelloWorld/
cp ${JENKINS_HOME}/jobs/Spikes/workspace/typescript/HelloWorld/HelloWorld/index.html ${DEV}/HelloWorld/
echo "done."

