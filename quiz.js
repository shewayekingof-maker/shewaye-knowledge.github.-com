// 500 General Knowledge Questions for Shewaye Quiz
const questions = [
// ---------------- Ethiopian History & Culture (1 - 100) ----------------
  { category: "Ethiopian History", question: "የዓድዋ ጦርነት የተካሄደው በየትኛው ዓመተ ምህረት ነው?", options: ["1888 ዓ.ም", "1896 ዓ.ም", "1928 ዓ.ም", "1874 ዓ.ም"], answer: 0 },
  { category: "Ethiopian History", question: "የኢትዮጵያ የመጨረሻው ንጉሠ ነገሥት ማን ነበሩ?", options: ["አጼ ቴዎድሮስ", "አጼ ዮሐንስ", "ቀዳማዊ ኃይለ ሥላሴ", "አጼ ምኒልክ"], answer: 2 },
  { category: "Ethiopian History", question: "የአክሱም ሐውልቶች በየትኛው የኢትዮጵያ ክልል ይገኛሉ?", options: ["አማራ", "ትግራይ", "ኦሮሚያ", "ደቡብ"], answer: 1 },
  { category: "Ethiopian History", question: "በኢትዮጵያ የመጀመሪያው ዘመናዊ ትምህርት ቤት የትኛው ነው?", options: ["ዳግማዊ ምኒልክ", "ተፈሪ መኮንን", "ኮከበ ጽባሕ", "እቴጌ ጣይቱ"], answer: 0 },
  { category: "Ethiopian History", question: "የላሊበላ ውቅር አብያተ ክርስቲያናት በየትኛው ክፍለ ዘመን ተገነቡ?", options: ["12ኛው ክፍለ ዘመን", "15ኛው ክፍለ ዘመን", "8ኛው ክፍለ ዘመን", "18ኛው ክፍለ ዘመን"], answer: 0 },
  { category: "Ethiopian History", question: "አጼ ቴዎድሮስ የመጨረሻውን መስዋዕትነት የከፈሉት የት ቦታ ነው?", options: ["አድዋ", "መቅደላ", "ጎንደር", "መቀሌ"], answer: 1 },
  { category: "Ethiopian History", question: "የኢትዮጵያ ብሔራዊ ባንክ የተመሰረተው በየትኛው ዓመት ነው?", options: ["1905 ዓ.ም", "1935 ዓ.ም", "1955 ዓ.ም", "1920 ዓ.ም"], answer: 0 },
  { category: "Ethiopian History", question: "የኢትዮጵያ ታላቁ የህዳሴ ግድብ ግንባታ የተጀመረበት ዓመት?", options: ["2001 ዓ.ም", "2003 ዓ.ም", "2005 ዓ.ም", "2008 ዓ.ም"], answer: 1 },

  // ---------------- Science & Technology (101 - 250) ----------------
  { category: "Science & Technology", question: "የውሃ ኬሚካላዊ ፎርሙላ ምንድን ነው?", options: ["CO2", "H2O", "O2", "NaCl"], answer: 1 },
  { category: "Science & Technology", question: "በፀሐይ ሥርዓት ውስጥ ትልቁ ፕላኔት የትኛው ነው?", options: ["መሬት", "ማርስ", "ጁፒተር (Jupiter)", "ሳተርን"], answer: 2 },
  { category: "Science & Technology", question: "የብርሃን ፍጥነት በሰከንድ ስንት ኪሎሜትር ነው?", options: ["150,000 km/s", "300,000 km/s", "500,000 km/s", "100,000 km/s"], answer: 1 },
  { category: "Science & Technology", question: "የሰው ልጅ ልብ በደቂቃ በአማካይ ስንት ጊዜ ይመታል?", options: ["50-60", "72-80", "100-120", "40-50"], answer: 1 },
  { category: "Science & Technology", question: "የስበት ሕግን (Law of Gravity) ያገኘው ሳይንቲስት ማን ነው?", options: ["አልበርት አንስታይን", "አይዛክ ኒውተን", "ጋሊሊዮ ጋሊሊ", "ኒኮላ ቴስላ"], answer: 1 },
  { category: "Science & Technology", question: "በሰው አካል ውስጥ ትልቁ አካል (organ) የትኛው ነው?", options: ["ጉበት", "ቆዳ", "ሳንባ", "ልብ"], answer: 1 },
  { category: "Science & Technology", question: "የኮምፒውተር አእምሮ ተብሎ የሚጠራው የትኛው አካል ነው?", options: ["RAM", "Hard Drive", "CPU", "GPU"], answer: 2 },
  { category: "Science & Technology", question: "የኦክስጅን ኬሚካላዊ ምልክት ምንድን ነው?", options: ["O", "Ox", "O2", "Og"], answer: 0 },

  // ---------------- World Geography (251 - 380) ----------------
  { category: "Geography", question: "በዓለም ላይ ረጅሙ ወንዝ የትኛው ነው?", options: ["አማዞን", "ናይል", "ሚሲሲፒ", "ያንግትዜ"], answer: 1 },
  { category: "Geography", question: "በስፋት የዓለማችን ትልቋ ሀገር ማን ናት?", options: ["ቻይና", "ካናዳ", "ሩሲያ", "አሜሪካ"], answer: 2 },
  { category: "Geography", question: "የጃፓን ዋና ከተማ ማን ይባላል?", options: ["ቤጂንግ", "ሴኡል", "ቶኪዮ", "ባንኮክ"], answer: 2 },
  { category: "Geography", question: "በዓለም ላይ ትልቁ ውቅያኖስ የትኛው ነው?", options: ["አትላንቲክ", "ህንድ ውቅያኖስ", "ፓሲፊክ (Pacific)", "አርክቲክ"], answer: 2 },
  { category: "Geography", question: "የአፍሪካ ከፍተኛው ተራራ የትኛው ነው?", options: ["ተራራ ኪሊማንጃሮ", "ተራራ ኬንያ", "ራስ ዳሽን", "ኤቨረስት"], answer: 0 },
  { category: "Geography", question: "በህዝብ ቁጥር የዓለማችን ትልቋ ሀገር ማን ናት?", options: ["ህንድ", "ቻይና", "አሜሪካ", "ኢንዶኔዢያ"], answer: 0 },
  { category: "Geography", question: "የፈረንሳይ ዋና ከተማ ማን ይባላል?", options: ["በርሊን", "ማድሪድ", "ፓሪስ", "ሮም"], answer: 2 },
    // ---------------- General Knowledge Questions ----------------
  { category: "Natural Science", question: "በዓለም ላይ ትልቁ ውቅያኖስ የትኛው ነው?", options: ["ፓሲፊክ ውቅያኖስ", "አትላንቲክ ውቅያኖስ", "ህንድ ውቅያኖስ", "አርክቲክ ውቅያኖስ"], answer: 0 },
  { category: "Natural Science", question: "በዓለም ላይ ረጅሙ ወንዝ የትኛው ነው?", options: ["አማዞን", "የናይል (ዓባይ) ወንዝ", "ሚሲሲፒ", "ያንግትዜ"], answer: 1 },
  { category: "Natural Science", question: "የሰው ልጅ የደም ዝውውር ሥርዓትን ለመጀመሪያ ጊዜ በትክክል ያብራራው ማን ነው?", options: ["ቻርልስ ዳርዊን", "ዊሊያም ሐርቪ", "ሉዊ ፓስተር", "አሌክሳንደር ፍሌሚንግ"], answer: 1 },
  { category: "Natural Science", question: "የፀሐይ ሥርዓታችን ትልቁ ፕላኔት የትኛው ነው?", options: ["ማርስ", "ሳተርን", "ጁፒተር", "ኔፕቱን"], answer: 2 },
  { category: "Natural Science", question: "የውሃ ኬሚካላዊ ፎርሙላ ምንድን ነው?", options: ["CO2", "H2O", "O2", "NaCl"], answer: 1 },
  { category: "Geography", question: "በዓለም ላይ ትልቁ አህጉር የትኛው ነው?", options: ["አፍሪካ", "እስያ", "ሰሜን አሜሪካ", "አውሮፓ"], answer: 1 },
  { category: "Natural Science", question: "በሰው አካል ውስጥ ትልቁ አካል (Organ) የትኛው ነው?", options: ["ጉበት", "ቆዳ", "ልብ", "ሳንባ"], answer: 1 },
  { category: "Natural Science", question: "የኦክስጅን ኬሚካላዊ ምልክት ምንድን ነው?", options: ["H", "N", "O", "K"], answer: 2 },
  { category: "Geography", question: "በዓለም ላይ ከፍተኛው ተራራ የትኛው ነው?", options: ["የኤቨረስት ተራራ", "ኪሊማንጃሮ", "K2", "ሞንት ብላንክ"], answer: 0 },
  { category: "Natural Science", question: "የብርሃን ፍጥነት በሰከንድ ስንት ኪሎሜትር ነው?", options: ["150000 ኪ.ሜ/ሰከንድ", "300000 ኪ.ሜ/ሰከንድ", "500000 ኪ.ሜ/ሰከንድ", "100000 ኪ.ሜ/ሰከንድ"], answer: 1 },
  { category: "History", question: "የተባበሩት መንግሥታት ድርጅት (UN) የተመሠረተው በየትኛው ዓመተ ምህረት ነው?", options: ["በእ.ኤ.አ. 1918", "በእ.ኤ.አ. 1945", "በእ.ኤ.አ. 1963", "በእ.ኤ.አ. 1950"], answer: 1 },
  { category: "History", question: "የአፍሪካ ህብረት (OAU) ዋና መሥሪያ ቤት የት ይገኛል?", options: ["ካይሮ", "ናይሮቢ", "አዲስ አበባ፤ ኢትዮጵያ", "ጆሃንስበርግ"], answer: 2 },
  { category: "History", question: "አንደኛው የዓለም ጦርነት የተጀመረው በየትኛው ዓመት ነው?", options: ["በእ.ኤ.አ. 1914", "በእ.ኤ.አ. 1939", "በእ.ኤ.አ. 1905", "በእ.ኤ.አ. 1920"], answer: 0 },
  { category: "History", question: "የኢንዱስትሪ አብዮት ለመጀመሪያ ጊዜ የተጀመረው በየትኛው ሀገር ነው?", options: ["ፈረንሳይ", "አሜሪካ", "ታላቋ ብሪታንያ", "ጀርመን"], answer: 2 },
  { category: "History", question: "ሁለተኛው የዓለም ጦርነት ያበቃው በየትኛው ዓመት ነው?", options: ["በእ.ኤ.አ. 1940", "በእ.ኤ.አ. 1945", "በእ.ኤ.አ. 1950", "በእ.ኤ.አ. 1938"], answer: 1 },
  { category: "Geography", question: "የጃፓን ዋና ከተማ ማን ይባላል?", options: ["ቤጂንግ", "ሴኡል", "ቶኪዮ", "ባንኮክ"], answer: 2 },
  { category: "Geography", question: "የካናዳ ዋና ከተማ ማን ይባላል?", options: ["ቶሮንቶ", "ኦታዋ", "ቫንኩቨር", "ሞንትሪያል"], answer: 1 },
  { category: "Geography", question: "በቆዳ ስፋቷ በዓለም ላይ ትልቋ ሀገር ማን ናት?", options: ["ካናዳ", "ቻይና", "ሩሲያ", "አሜሪካ"], answer: 2 },
  { category: "Geography", question: "የአውስትራሊያ ዋና ከተማ ማን ይባላል?", options: ["ሲድኒ", "ሜልቦርን", "ካንቤራ", "ፐርዝ"], answer: 2 },
  { category: "Geography", question: "በሕዝብ ብዛት በዓለም ላይ በአንደኝነት የምትቀመጠው ሀገር የትኛዋ ናት?", options: ["ቻይና", "ሕንድ", "አሜሪካ", "ኢንዶኔዢያ"], answer: 1 },
  { category: "Technology", question: "'WWW' የሚለው ምህጻረ ቃል ሙሉ ትርጉም ምንድን ነው?", options: ["World Wide Web", "World Wide War", "Web Wide World", "World Web Wide"], answer: 0 },
  { category: "Technology", question: "ኮምፒውተር ላይ መረጃን ጊዜያዊ አድርጎ የሚያስቀምጠው ማህደረ ትውስታ ምንድን ነው?", options: ["ROM", "Hard Drive", "RAM", "SSD"], answer: 2 },
  { category: "Technology", question: "መጀመሪያውን ስልክ የፈጠረው ሰው ማን ይባላል?", options: ["ቶማስ ኤዲሰን", "አሌክሳንደር ግራሃም ቤል", "ኒኮላ ቴስላ", "አልበርት አንስታይን"], answer: 1 },
  { category: "Technology", question: "የሲሊኮን ቫሊ (Silicon Valley) ማዕከል በየትኛው ክፍለ ሀገር ይገኛል?", options: ["ኒው ዮርክ", "ቴክሳስ", "ካሊፎርኒያ", "ዋሽንግተን"], answer: 2 },
  { category: "Technology", question: "'CPU' የሚለው ምህጻረ ቃል ሙሉ ትርጉም ምንድን ነው?", options: ["Central Processing Unit", "Computer Processing Unit", "Central Power Unit", "Control Processing Unit"], answer: 0 },
  { category: "Sports", question: "የኦሊምፒክ ጨዋታዎች ለመጀመሪያ ጊዜ የተጀመሩት በየትኛዋ ሀገር ነው?", options: ["ጣሊያን", "ግሪክ", "ግብጽ", "ፈረንሳይ"], answer: 1 },
  { category: "Arts", question: "የሞናሊዛ (Mona Lisa) ስዕል የሳለው ጥበበኛ ማን ይባላል?", options: ["ፓብሎ ፒካሶ", "ቪንሰንት ቫን ጎህ", "ሊዮናርዶ ዳ ቪንቺ", "ሚካኤል አንጄሎ"], answer: 2 },
  { category: "Sports", question: "በዓለም ዋንጫ እግር ኳስ ብዙ ጊዜ ያሸነፈችው ሀገር የትኛዋ ናት?", options: ["ጀርመን", "አርጀንቲና", "ብራዚል", "ጣሊያን"], answer: 2 },
  { category: "Arts", question: "የፒያኖ ቁልፎች በአጠቃላይ ስንት ናቸው?", options: ["66", "76", "88", "100"], answer: 2 },
  { category: "Sports", question: "የመጀመሪያው ዘመናዊ የኦሊምፒክ ጨዋታ የተካሄደው በየትኛው ዓመት ነው?", options: ["በእ.ኤ.አ. 1896", "በእ.ኤ.አ. 1900", "በእ.ኤ.አ. 1924", "በእ.ኤ.አ. 1880"], answer: 0 },
  { category: "Literature", question: "የ 'ፍቅር እስከ መቃብር' መጽሐፍ ደራሲ ማን ነው?", options: ["በአሉ ግርማ", "ሐዲስ አለማየሁ", "ፀጋዬ ገብረመድህን", "መንግስቱ ለማ"], answer: 1 },
  { category: "History", question: "በዓለም ላይ የመጀመሪያው የጽሑፍ ሥርዓት የተፈጠረው በየትኞቹ ሕዝቦች ነው?", options: ["ግብጻውያን", "ሱመሪያውያን", "ግሪኮች", "ሮማውያን"], answer: 1 },
  { category: "Culture", question: "የኢትዮጵያ ብሔራዊ መዝሙር ግጥም የጻፈው ማን ነው?", options: ["ፀጋዬ ገብረመድህን", "ደረጀ መላኩ", "አሰፋ ገብረማርያም", "ነጋሽ ገብረማርያም"], answer: 2 },
  { category: "Literature", question: "'ሮሜዮ እና ጁልየት' ተውኔትን የጻፈው ደራሲ ማን ይባላል?", options: ["ቻርለስ ዲከንስ", "ዊሊያም ሼክስፒር", "ማርክ ቴዌን", "ኦስካር ዋይልድ"], answer: 1 },
  { category: "Literature", question: "የመጀመሪያው አፍሪካዊ የኖቤል የስነ-ጽሁፍ ተሸላሚ ማን ይባላል?", options: ["ቺኑዋ አቼቤ", "ዎሌ ሶይንካ", "ንጉጊ ዋ ዚያንጎ", "ንግሩዲን ፋራህ"], answer: 1 },
  { category: "Mathematics", question: "የፓይታጎረስ ቲዮረም ለየትኛው ዓይነት ሦስት ማዕዘን ያገለግላል?", options: ["እኩል ጎን ላለው", "ቀጥተኛ ማዕዘን ላለው", "ተሳቢ ጎን ላለው", "ለማንኛውም ሦስት ማዕዘን"], answer: 1 },
  { category: "Mathematics", question: "የመጀመሪያው እና ብቸኛው ጥንድ የመወያያ (Prime) ቁጥር የትኛው ነው?", options: ["0", "1", "2", "4"], answer: 2 },
  { category: "Mathematics", question: "የፓይ (π) ግምታዊ ዋጋ ስንት ነው?", options: ["2.14", "3.14", "4.14", "1.41"], answer: 1 },
  { category: "Mathematics", question: "የአንድ ክብ የውስጥ ማዕዘናት ድምር ስንት ዲግሪ ነው?", options: ["180°", "270°", "360°", "90°"], answer: 2 },
  { category: "Mathematics", question: "0! (Zero factorial) ዋጋው ስንት ነው?", options: ["0", "1", "undefined", "10"], answer: 1 },
  { category: "Space Science", question: "ወደ ጠፈር ለመጀመሪያ ጊዜ የተኮሰችው መንኮራኩር ማን ትባላለች?", options: ["አፖሎ 11", "ስፑትኒክ 1", "ቮዬጀር 1", "ቻሌንጀር"], answer: 1 },
  { category: "Technology", question: "የብርሃን አምፖልን ያሻሻለው እና የፈጠረው ሰው ማን ነው?", options: ["ኒኮላ ቴስላ", "ቶማስ ኤዲሰን", "አሌክሳንደር ፎርሚ", "ቤንጃሚን ፍራንክሊን"], answer: 1 },
  { category: "Space Science", question: "የሳተርን ፕላኔት በዙሪያዋ በሚገኙት ምኖች ትታወቃለች?", options: ["ቀለበቶች", "ጨረቃዎች", "ደመናዎች", "በረዶዎች"], answer: 0 },
  { category: "Science", question: "የራዲዮአክቲቪቲ ግኝት ባለቤት የሆነችው የመጀመሪያዋ ሴት ማን ናት?", options: ["ሮዛሊንድ ፍራንክሊን", "ማሪ ኩሪ", "አዳ ሎቭሌስ", "ሊዝ ሜይትነር"], answer: 1 },
  { category: "Space Science", question: "በጨረቃ ላይ ለመጀመሪያ ጊዜ እግሩን ያረገው ሰው ማን ይባላል?", options: ["ዩሪ ጋጋሪን", "ኔይል አርምስትሮንግ", "ቡዝ ኦልድሪን", "ጆን ግሌን"], answer: 1 },
  { category: "Human Anatomy", question: "በሰው አካል ውስጥ ትንሹ አጥንት የት ይገኛል?", options: ["እጅ ውስጥ", "ጆሮ ውስጥ", "እግር ውስጥ", "አፍንጫ ውስጥ"], answer: 1 },
  { category: "Health", question: "የደም ግፊት መለኪያ መሣሪያ ምን ይባላል?", options: ["ቴርሞሜትር", "ስፊግሞማኖሜትር", "ባሮሜትር", "ስቴቶስኮፕ"], answer: 1 },
  { category: "Human Anatomy", question: "የሰው ልጅ በደቂቃ በአማካይ ስንት ጊዜ ይተነፍሳል?", options: ["ከ 5 እስከ 8 ጊዜ", "ከ 12 እስከ 20 ጊዜ", "ከ 30 እስከ 40 ጊዜ", "ከ 50 እስከ 60 ጊዜ"], answer: 1 },
  { category: "Health", question: "በሰው አካል ውስጥ የስኳር መጠንን የሚቆጣጠረው ሆርሞን የትኛው ነው?", options: ["አድሬናሊን", "ኢንሱሊን", "ታይሮክሲን", "ኤስትሮጂን"], answer: 1 },
  { category: "Human Anatomy", question: "የሰው ልጅ አጥንቶች በአጠቃላይ ስንት ናቸው?", options: ["150", "206", "300", "210"], answer: 1 },

  // ---------------- Sports & Culture (381 - 500) ----------------
  { category: "Sports", question: "የዓለም ዋንጫ እግር ኳስ ውድድር በስንት ዓመት አንዴ ይካሄዳል?", options: ["በ 2 ዓመት", "በ 3 ዓመት", "በ 4 ዓመት", "በ 5 ዓመት"], answer: 2 },
  { category: "Sports", question: "በኦሊምፒክ የማራቶን ሩጫ ርቀት ስንት ኪሎሜትር ነው?", options: ["40 km", "42.195 km", "45 km", "38.5 km"], answer: 1 },
  { category: "Sports", question: "የ 10,000 ሜትር እና የ 5,000 ሜትር የዓለም ሪከርድ ባለቤት የሆነው ኢትዮጵያዊ አትሌት ማን ነው?", options: ["ኃይሌ ገብረስላሴ", "ቀነኒሳ በቀለ", "ስለሺ ስሂን", "ደራርቱ ቱሉ"], answer: 1 },
  { category: "Sports", question: "የመጀመሪያውን የኦሊምፒክ ወርቅ ሜዳሊያ በባዶ እግሩ በመሮጥ ያሸነፈው አትሌት ማን ነው?", options: ["አበበ ቢቂላ", "ማሞ ወልዴ", "ምሩፅ ይፍጠር", "ኃይሌ ገብረስላሴ"], answer: 0 },
  { category: "Sports", question: "በእግር ኳስ ጨዋታ በአንድ ቡድን ውስጥ ስንት ተጫዋቾች ይጫወታሉ?", options: ["9", "10", "11", "12"], answer: 2 }

// ---------------- Quiz Controller Engine ----------------
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

// ጥያቄዎችን በዘፈቀደ ማቀያየሪያ (Shuffle)
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
  shuffledQuestions = shuffle([...questions]);
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
}

function loadQuestion() {
  const q = shuffledQuestions[currentQuestionIndex];
  const questionEl = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const categoryEl = document.getElementById("category");
  const progressEl = document.getElementById("progress");

  if (!q) return;

  if (categoryEl) categoryEl.textContent = q.category;
  if (progressEl) progressEl.textContent = `Question ${currentQuestionIndex + 1} / ${shuffledQuestions.length}`;
  
  questionEl.textContent = q.question;
  optionsContainer.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.style.cssText = "display: block; width: 100%; margin: 10px 0; padding: 14px; border-radius: 8px; border: 1px solid #ddd; background: #ffffff; color: #333; font-size: 16px; font-weight: 500; cursor: pointer; transition: 0.2s;";
    btn.textContent = opt;
    
    // Hover effect
    btn.onmouseover = () => btn.style.background = "#f0f4ff";
    btn.onmouseout = () => btn.style.background = "#ffffff";
    
    btn.onclick = () => selectAnswer(index);
    optionsContainer.appendChild(btn);
  });
}

function selectAnswer(selectedIndex) {
  const q = shuffledQuestions[currentQuestionIndex];
  if (selectedIndex === q.answer) {
    score++;
    const scoreVal = document.getElementById("score-val");
    if (scoreVal) scoreVal.textContent = score;
  }
  
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const quizBox = document.getElementById("quiz-box");
  quizBox.innerHTML = `
    <div style="text-align: center; padding: 30px 10px;">
      <h2 style="color: #4F46E5; margin-bottom: 15px;">ውድድሩን ጨርሰዋል! 🎉</h2>
      <p style="font-size: 1.2rem; margin-bottom: 25px;">የእርስዎ ውጤት: <strong>${score} / ${shuffledQuestions.length}</strong> ነው::</p>
      <button onclick="startQuiz()" style="padding: 12px 25px; border-radius: 8px; background: #4F46E5; color: white; border: none; font-size: 16px; cursor: pointer;">እንደገና ጀምር</button>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  startQuiz();
});
