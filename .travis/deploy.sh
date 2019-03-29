#!/bin/sh

if [[ "$TRAVIS_BRANCH" != "master" ]]; then
  echo "We're not on the master branch, skipping deployment"
  # analyze current branch and react accordingly
  exit 0
fi
echo "Deploying to production"
ssh-agent -s
chmod 600 ./.travis/id_rsa.ppk
ssh-add ./.travis/id_rsa.ppk
git remote add deploy $SFTP_USER@stephen.work:portfolio.git
git push deploy