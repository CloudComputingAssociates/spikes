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
cp $JENKINS_HOME/jobs/Spikes/workspace/LandingPage/index.html ${DEV}

# Spike: typescript example, 1-page app (HelloWorld)
message="Moving typescript HelloWorld example ..."
echo $message
# re-create
mkdir $DEV/HelloWorld
# move only files needed for website
cp $JENKINS_HOME/jobs/Spikes/workspace/typescript/HelloWorld/HelloWorld/app.css ${DEV}/HelloWorld/
cp $JENKINS_HOME/jobs/Spikes/workspace/typescript/HelloWorld/HelloWorld/app.js ${DEV}/HelloWorld/
cp $JENKINS_HOME/jobs/Spikes/workspace/typescript/HelloWorld/HelloWorld/index.html ${DEV}/HellfffoWorld/

# Spike: angular example (HelloAngular)
message="Moving typescript HelloAngular example ..."
echo $message
# create dirs
mkdir $DEV/HelloAngular
mkdir $DEV/HelloAngular/external-libraries
# move libs
cp $JENKINS_HOME/jobs/Spikes/workspace/angular/external-libraries/*.* ${DEV}/HelloAngular/external-libraries
# move files
cp $JENKINS_HOME/jobs/Spikes/workspace/angular/helloangular/app.css ${DEV}/HelloAngular/
cp $JENKINS_HOME/jobs/Spikes/workspace/angular/helloangular/app.js ${DEV}/HelloAngular/
cp $JENKINS_HOME/jobs/Spikes/workspace/angular/helloangular/index.html ${DEV}/HelloAngular/

#Spike: angular Pomodoro from Angular 2 Essentials
#create dirs
mkdir $DEV/Pomodoro
mkdir $DEV/Pomodoro/assets
cp -r $JENKINS_HOME/jobs/Spikes/workspace/angular/Pomodoro ${DEV}/Pomodoro  #recursive copy everything

echo "done."

