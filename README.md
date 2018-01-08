Hi guys, 

Firstly thank you very much that you decided to register for our event.

I'm sending you what you need to participate in the event. Please prepare everything before you come. If you have any problems please don't hesitate to contact me tomasz.krajewski@opitz.consulting.com. I will be 1 hour before our meeting at the office available so I could help you also from here.
Unfortunately we won't waste time for setting up environments if you come unprepared :P 

We will play around with Alexa Skills.  Please use Linux!! I'm not familiar with Windows and I hope you are also Linux fan (or you become one;) Of course you can do everything with Windows but my support will be limited.



**There are two ways to set-up your environment for developing Alexa skills during our Meeting**:

![Local Docker installation or virtual box](buttons.png)

This README describes the usage of my predefined virtual machine (**2**). When you use my VM, everything will be preinstalled and you don't have to do any extra work. My VM contains bash scripts so that the Alexa skill template can be updated any time. Though, the download of the VM might take some time (4.5 GB).

If you'd rather want to use a Docker environment or already have a working Docker installation, then skip this tutorial and [follow the instructions in this detailed tutorial](https://github.com/falent/Alexa_universal_skill_template). With docker you'll need some extra time for setting up your environment.



# 1 Amazon Developer Account

[Please register at the Amazon Developer Portal ](http://developer.amazon.com/)
It's free of charge. If you already have an Amazon account, then you don't have to register. You can use the credentials of your existing account. Without the _Amazon Developer Console_ you won't be able to write an Alexa skill.



# 2 Oracle VirtualBox installation
Download [Oracle VirtualBox](https://www.virtualbox.org/wiki/Downloads) and install it.



# 3 Virtual Machine

* Download my [virtual machine](https://drive.google.com/open?id=1H0xQT7PKidrgmTQkqQKQBXhZ7M8nrHjW) for Oracle VirtualBox.
* Import the _.ova_-File in VirtualBox ([tutorial](https://docs.oracle.com/cd/E26217_01/E26796/html/qs-import-vm.html)) and change the hardware settings so they suit your system (CPU, RAM and network interface).
* Credentials for the virtual machine:

  * user: _alexa_
  * password: _opitz_