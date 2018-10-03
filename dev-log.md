##02OCT2018 - 1630:  

  Integrating the new boilerplate with travis and introducing testing suite.  
  Music: The Ramones.

  My Boilerplate aged badly - integrating Webpack 4.0 because my old build had vulnerabilities I didn't account for. That all being said, I am at least getting *things* to populate on a screen.

## *02OCT2018 - 10:30*:  

  Beginning scaffolding, attempting to modernize to latest releases of dependencies is a drag, but must be done.  
  *Music: Whatever Downtempo list on Amazon Music that plays.*  

  Okay - let's talk about how we got **HERE**... This started as a basic codepen project - (Seen here: https://codepen.io/tjayrocket/pen/fa0933e1091b4a9c052f57bb90b276e4 ) just to begin the idea phase of the project. It started as a loan calculator because the Functionality of the software we use does NOT include it. Why? No idea - I can only speculate. I know some good work from a good dev team could implement this functionality, but the company was recently sold for some crazy amount, and I am sure the new parent company is trying to absorb that cost without finding new ways to spend money.  

  This eventually became a github repo for personalized development, only after learning of some of the limitations codepen provides - and I wanted a more custom platform to work on this project further. The original, and very messy, repo can be found here: ( https://github.com/tjayrocket/loan-calculator ).  

  That in and of itself led me to find a better way to develop this for ease of use. I learned enough about React by this point to start migrating the system over, so I have chosen to begin a new repo for this purpose - which is the one you are at currently.  

  So, let's talk about why I am doing this...  

  We get a LOT of questions in our shop. (I currently work for an unnamed pawn shop and due to legal concerns, I will not use the name of the company I work for, or any particular pawn shop, company or conglomerate. Also, I don't give away free advertising so should they want to profit from this original project... they can pay me for it.)  

  One of the larger parts of my job is answering the phone and having whatever disembodied voice scream at me that: *'I lost my ticket! I need to know how much my loan is and how much time do I have to pay it back?!?!'*  

  This leads me to dig out their info and tell them the current balance - but our systems do NOT return any information but the current info. Maybe this is because it is a software system used nationally, and with 50 states that means at least 50 rates and no one has the gumption to tackle that task. Also, it appears to be a Telnet based system connecting nationally via PuTTY so they just let it keep running until it crashes... which it does, constantly.  

  So, this will fill in that niche problem. I am hoping in the 1.0 version, it contains at least the loan calculator and layaway calculator. With upgrades for future patches including: Computer Loan Best Practices, Firearm loan Best practices, and an F.A.Q. and link to the RCW 19.60 ( https://app.leg.wa.gov/RCW/default.aspx?cite=19.60 ) for reference at a later date. The F.A.Q. may be split into 2 sections - one for customers, and one for employees.  

  For today though - let's get this up and running. More to come later...  

T.Jay

(P.S. - my markdown abilities are sub-standard, I freely admit this. I am using a Markdown Previewer, built by [Michael Stewart](https://codepen.io/MichaelWStuart/#) to make this log. Go say hi to him.)