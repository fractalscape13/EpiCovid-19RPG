 # _EpiCovid-19 RPG_

#### _Functional programming practice_, _15 April 2020_

#### By _**Michelle Morin, Patrick Kille, Zakkrey Short, Joseph Wangemann_**_

## Description

_This RPG allows users to simulate being part of the hysteria surrounding preparation for surviving quarantine/social distancing during the covid-19 pandemic._

## Specification user stories:

* Users are able to create a character with a name, hygiene level (health), food supply level, toilet paper count (currency), single doctor token
  - users can trade toilet paper for food
  - users can trade toilet paper for items needed to obtain pet and/or garden
* Users have to accomplish different missions
  - going to grocery store (reduces hygiene, increases food supply and increases tp supply)
  - going to doctor if they get sick (costs a lot of tp, increases hygiene)
* Each turn (a day), users can choose to stay in (improves hygiene, but decrements tp and food levels) or go on a mission (collect tp or food)
* If hygiene falls below 1, they get sick
  - can only go to doctor once in game
* Users can level up
  - acquire a pet (need to collect collar, food bowl) -> reduces boredom
  - acquire a garden (need to collect gardening tools, lawn mower, sprinkler) -> increases food supply
  - level up to a bidet (requires trading in large amount of toilet paper)
* Users can obtain different inventory to survive quarantine
  - have to find toilet paper
  - have to restock food supply level
  - have to take showers
* Users can run out of inventory and lose the game
  - player loses toilet paper or food supply level reaches 0, or must complete a risky mission to restock
* Users can get sick and lose game
* Win state = acquire pet, garden, and bidet

## Setup/Installation Requirements

#### Node install

###### For macOS:
_If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:_
* $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

_Install Git with the following command:_
* $ brew install git

_Next, install Node.js by entering the following command in Terminal:_
* $ brew install node

###### For Windows:
_Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions._

#### Install this application

_Clone this repository via Terminal using the following commands:_
* _$ cd desktop_
* _$ git clone {url to this repository}_
* _$ cd EpicRPG_
_Then, confirm that you have navigated to the EpicRPG project directory by entering "pwd" in Terminal._

_Next, install npm at the project's root directory via the following commands:_
* _$ npm install_
* _$ npm run build_

_Open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code on macOS, enter the command "code ." in Terminal)._

## Technologies Used

_JavaScript, npm, webpack, Jest_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2020 **_Michelle Morin, Patrick Kille, Zakkrey Short, Joseph Wangemann_**
