## Other github account: yousafsyed
Host git-aicareliving github.com
HostName github.com
IdentityFile ~/.ssh/id_ed25519
User yousafsyed

cat >> ~/.ssh/config

git clone mailto:git@git-aicareliving:aicareliving/webui.git

cat >> switch_git

aicare

yousafsyed@icloud.com

sudo mv ~/switch_git /usr/local/bin/switch_git

sudo chmod +x  /usr/local/bin/switch_git

which code

~/switch_git

./switch_git 

sudo chmod +x  /usr/local/bin/switch_git

switch_git aicare

esac





#!/bin/bash

ACCOUNT=$1

eval $(ssh-agent -s);

case $ACCOUNT in
  singlecom)
      git config --global --replace-all  user.name 'safsinglecom'
      git config --global yousaf.syed@singlecomm.com
      ssh-add -D
      ssh-add ~/.ssh/id_ed25519_singlecom
      ;;

  work)
      git config --global --replace-all  user.name 'yousafsyed-bg'
      git config --global user.email yousaf@brokergenius.com
      ssh-add -D
      ssh-add ~/.ssh/id_rsa
      ;;
  personal)
      git config --global --replace-all  user.name 'yousafsyed'
      git config --global user.email yousafsyed@icloud.com
      ssh-add -D
      ssh-add ~/.ssh/id_rsa_bmail
      ;;
  *  )
      echo "Please mention account type i.e work or personal or top"
      exit 1
esac