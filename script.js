// 1. Data Structure for all rounds
const quizData = {
    "Passing Round": [
        // { text: "लक्षद्वीप का सबसे बड़ा द्वीप कौन सा है?", answer: "आण्ड्रॉट", time: 20, type: "text" },
        // { text: "मकराना नगर किस वस्तु के लिए प्रसिद्ध है?", answer: "संगमरमर", time: 20, type: "text" },
        // { text: "दक्षिण भारत का दूसरा सर्वोच्च शिखर कौन सा है?", answer: "दोदाबेटा", time: 20, type: "text" },
        // { text: "भारत में हैवी इलेक्ट्रिकल्स का प्रथम कारखाना कहाँ आरंभ हुआ?", answer: "भोपाल", time: 20, type: "text" },
        // { text: "भारत में सबसे कम वर्षा कहाँ होती है?", answer: "जैसलमेर", time: 20, type: "text" }
        { text: "मिजोरम की सबसे ऊँची चोटी का क्या नाम है?", answer: "फांगपुई", time: 20, type: "text" },
{ text: "नागालैण्ड का प्रवेश द्वार किस नगर को कहते हैं?", answer: "दीमापुर", time: 20, type: "text" },
{ text: "शांत घाटी (Silent Valley) किस राज्य में स्थित है?", answer: "केरल", time: 20, type: "text" },
{ text: "भारत का सबसे बड़ा नदी द्वीप कौन-सा है?", answer: "माजुली", time: 20, type: "text" },
{ text: "छोटा अंडमान और दक्षिणी अंडमान को कौन अलग करता है?", answer: "डंकन पैसेज", time: 20, type: "text" },
{ text: "कौन-सी नदी 'दक्षिण गंगा' के नाम से प्रसिद्ध है?", answer: "गोदावरी", time: 20, type: "text" },
{ text: "'अनाईमुडी' का शाब्दिक अर्थ क्या है?", answer: "हाथी का सिर", time: 20, type: "text" },
{ text: "भारत की पहली यूरेनियम खदान कहाँ स्थित है?", answer: "जादूगौड़ा", time: 20, type: "text" },
{ text: "भारत में एकमात्र सक्रिय ज्वालामुखी का नाम क्या है?", answer: "बैरन", time: 20, type: "text" },
{ text: "किस बंदरगाह को 'अरब सागर की रानी' कहा जाता है?", answer: "कोच्चि", time: 20, type: "text" },
{ text: "भारत की प्रथम जल विद्युत परियोजना कौन-सी है?", answer: "शिव समुद्रम", time: 20, type: "text" },
{ text: "'कोल कैपिटल सिटी ऑफ इंडिया' के नाम से कौन-सा नगर जाना जाता है?", answer: "झरिया", time: 20, type: "text" },
{ text: "कोल्हापुर किस खनिज पदार्थ के लिए प्रसिद्ध है?", answer: "बौक्साइट", time: 20, type: "text" },
{ text: "सोन नदी पर बने बांध का क्या नाम है?", answer: "बाण सागर", time: 20, type: "text" },
{ text: "गुजरात के किस जिले में प्रथम डेयरी कोऑपरेटिव सोसाइटी स्थापित की गई थी?", answer: "खेड़ा", time: 20, type: "text" }
    ],
    "Picture Round": [
        { text: "इतिहास में, इस प्रकार की उत्कृष्ट नटराज कांस्य मूर्तियों के निर्माण के लिए दक्षिण भारत का कौन सा राजवंश सर्वाधिक प्रसिद्ध है?", answer: "चोल", time: 20, type: "picture", mediaSrc: "images/natraj.jpg" },
        { text: "1957-58 में इन प्रागैतिहासिक गुफाओं की खोज किस प्रसिद्ध भारतीय पुरातत्वविद् ने की थी?", answer: "वाकणकर", time: 20, type: "picture", mediaSrc: "images/bhim.jpg" },
        { text: "18वीं शताब्दी में इस वेधशाला का निर्माण आमेर (जयपुर) के किस दूरदर्शी राजपूत महाराजा ने करवाया था?", answer: "जयसिंह (सवाई जयसिंह द्वितीय)", time: 20, type: "picture", mediaSrc: "images/jantar.jpg" },
        { text: "चित्र में पानी की सतह पर तैरते हुए वनस्पति, मिट्टी और जैविक पदार्थों के जो विशिष्ट बड़े-बड़े द्वीप दिखाई दे रहे हैं, उन्हें स्थानीय मणिपुरी भाषा में क्या कहा जाता है?", answer: "फुमडी (Phumdi)", time: 20, type: "picture", mediaSrc: "images/keibul.jpg" },
        { text: "जहाजों के पाल पर अंकित 'बाघ' (व्याघ्र) का चिह्न दक्षिण भारत के किस महान और शक्तिशाली राजवंश का शाही प्रतीक था?", answer: "चोल", time: 20, type: "picture", mediaSrc: "images/chola.jpg" }
        // ... add remaining questions
    ],
    "Video Round": [
        { text: "वीडियो में दिखाई दे रहे खिलाड़ी  का नाम और किस टीम के कप्तान हैं", answer: "हरमनप्रीत सिंह", time: 20, type: "video", mediaSrc: "videos/athe.mp4" },
        { text: "विश्व का पहला सोलर पर चलने वाला एयरपोर्ट किस देश के राज्य में  कहां पर  है", answer: "कोच्चि", time: 20, type: "video", mediaSrc: "videos/solar.mp4" },
        { text: "इस मूवी में आमिर खान ने बच्चे की किस बीमारी के बारे में बताया है", answer: "डिस्लेक्सिया (Dyslexia)", time: 20, type: "video", mediaSrc: "videos/taare.mp4" },
        { text: "फिल्म में तीन मुख्य पात्रों के नाम क्या हैं?", answer: "राजू, श्याम और बाबूराव गणपतराव आप्टे", time: 20, type: "video", mediaSrc: "videos/movie.mp4" },
        { text: "भगवान श्रीराम ने शिवधनुष किसके कहने पर उठाया था?", answer: "महर्षि विश्वामित्र जी", time: 20, type: "video", mediaSrc: "videos/ram.mp4" }
    ],
    "Audio Round": [
        { text: "इस वाद्ययंत्र को सुनने के बाद, गुप्त वंश के उस प्रतापी राजा का नाम बताएँ जो दक्षिण भारत में अपने विजय अभियान के साथ-साथ एक 'कुशल वीणावादक' के रूप में भी विख्यात था।", answer: "समुद्रगुप्त", time: 20, type: "audio", mediaSrc: "audios/veena.mp3" },
        { text: "प्रतिभागी को यह श्लोक सुनकर बताना है कि यह उपदेश किस ग्रंथ से लिया गया है, जिसमें आत्मा की अमरता (जिसे न शस्त्र काट सकते हैं, न पानी भिगो सकता है) का वर्णन है।", answer: "गीता उपदेश", time: 20, type: "audio", mediaSrc: "audios/gita.mp3" },
        { text: "इस राष्ट्रीय गीत की धुन को पहचानें और बताएँ कि इसी नाम ('वन्देमातरम्') से एक क्रान्तिकारी अखबार का प्रकाशन किस महान स्वतंत्रता सेनानी ने किया था?", answer: "महर्षि अरविन्द घोष", time: 20, type: "audio", mediaSrc: "audios/vande.mp3" },
        { text: "16 अप्रैल 1853 को भारत में जब पहली रेलगाड़ी चली थी, तो वह किन दो स्टेशनों के बीच चलाई गई थी?", answer: "मुम्बई (बोरी बन्दर) से ठाणे (थाने)", time: 20, type: "audio", mediaSrc: "audios/train.mp3" },
        { text: "यह ध्वनि पंजाब की उस शूरवीर भूमि से संबंधित है जहाँ राम सिंह के नेतृत्व में ब्रिटिश शासन के विरुद्ध एक ऐतिहासिक और उग्र आन्दोलन चलाया गया था। उस आन्दोलन का क्या नाम था?", answer: "कूका आन्दोलन", time: 20, type: "audio", mediaSrc: "audios/nagara.mp3" }
    ],

    // Optional Round - Grouped by Topic
    "Optional Round": {
        "Dharam Sanskriti": {
            "Team A": [
                { text: "राजा जनक का वास्तविक नाम क्या था?", answer: "सीरध्वज", time: 20, type: "text" }
            ],
            "Team B": [
                { text: "सम्पूर्ण असम में 'नामघर' स्थापित करने वाले प्रसिद्ध वैष्णव संत कौन थे?", answer: "शंकरदेव", time: 20, type: "text" }
            ],
            "Team C": [
                { text: "सिंधियों के महान संत झूलेलाल को किस देवता का अवतार माना जाता है?", answer: "वरुण", time: 20, type: "text" }
            ],
            "Team D": [
                { text: "राजा परीक्षित को श्रापवश किस साँप ने डसा था?", answer: "तक्षक", time: 20, type: "text" }
            ],
            "Team E": [
                { text: "प्रसिद्ध तमिल संत तिरुवल्लूवर के सुभाषित किस ग्रन्थ में संगृहीत हैं?", answer: "तिरुक्कुरल", time: 20, type: "text" }
            ]
        },
        // आप भविष्य में इसी तरह History, Rajniti आदि के प्रश्न भी हर टीम के लिए बाँट सकते हैं
        "History": {
            "Team A": [
                { text: "असम का सबसे प्राचीन नाम क्या है?", answer: "प्रागज्योतिषपुर", time: 20, type: "text" }
            ],
            "Team B": [
                { text: "चोल राजवंश की सर्वप्रथम राजधानी कौन सी थी?", answer: "उरैयूर", time: 20, type: "text" }
            ],
            "Team C": [
                { text: "ह्वेनसांग के अनुसार सम्राट हर्षवर्धन प्रत्येक छठे वर्ष अपना सर्वस्व दान कहाँ करते थे?", answer: "प्रयागराज", time: 20, type: "text" }
            ],
            "Team D": [
                { text: "'बुद्ध चरितम' के लेखक अश्वघोष किस राजा के दरबार में थे?", answer: "कनिष्क", time: 20, type: "text" }
            ],
            "Team E": [
                { text: "पल्लव शक्ति का प्रमुख केन्द्र कौन सा स्थान था?", answer: "कांचीपुरम", time: 20, type: "text" }
            ]
        },
        "Rajniti and Sanvidhaan": {
            "Team A": [
                { text: "संविधान में 'गणराज्य' की अवधारणा किस देश के संविधान से प्रेरित है?", answer: "फ्रांस", time: 20, type: "text" }
            ],
            "Team B": [
                { text: "भारत में आपातकालीन प्रावधान किस देश के संविधान से लिए गए हैं?", answer: "जर्मनी", time: 20, type: "text" }
            ],
            "Team C": [
                { text: "लोकसभा के अस्थाई (प्रोटेम) अध्यक्ष की नियुक्ति कौन करता है?", answer: "राष्ट्रपति", time: 20, type: "text" }
            ],
            "Team D": [
                { text: "'पैंथर पार्टी' मुख्य रूप से किस राज्य/केन्द्र शासित प्रदेश का राजनीतिक दल है?", answer: "जम्मू-कश्मीर", time: 20, type: "text" }
            ],
            "Team E": [
                { text: "भारत में पहला लोक अदालत शिविर कहाँ आयोजित किया गया था?", answer: "गुजरात", time: 20, type: "text" }
            ]
        },
        "Khel": {
            "Team A": [
                { text: "विश्व में सबसे अधिक ऊँचाई पर स्थित क्रिकेट का मैदान किस स्थान पर है?", answer: "चैल", time: 20, type: "text" }
            ],
            "Team B": [
                { text: "प्रथम भारतीय एशियाई स्नूकर चैम्पियन (1989) कौन थे?", answer: "यासीन", time: 20, type: "text" }
            ],
            "Team C": [
                { text: "स्वतंत्र भारत की क्रिकेट टीम के प्रथम भारतीय कप्तान कौन थे?", answer: "अमरनाथ", time: 20, type: "text" }
            ],
            "Team D": [
                { text: "इंग्लिश चैनल तैरकर पार करने वाली प्रथम भारतीय महिला कौन थीं?", answer: "आरती", time: 20, type: "text" }
            ],
            "Team E": [
                { text: "पद्मश्री से सम्मानित प्रथम भारतीय धावक कौन थे?", answer: "मिल्खा", time: 20, type: "text" }
            ]
        },
        "Bharat Vikas Parishad": {
            "Team A": [
                { text: "भारत को जानो प्रतियोगिता के तृतीय (क्षेत्रीय) स्तर को परिषद् द्वारा कुल कितने क्षेत्रों (regions) में बांटा गया है?", answer: "दस", time: 20, type: "text" }
            ],
            "Team B": [
                { text: "भारत विकास परिषद् का केन्द्रीय कार्यालय दिल्ली के किस क्षेत्र में स्थित है?", answer: "पीतमपुरा", time: 20, type: "text" }
            ],
            "Team C": [
                { text: "परिषद् के पाँच सूत्रों (सम्पर्क, सहयोग, संस्कार, सेवा...) में अंतिम (पाँचवाँ) सूत्र कौन सा है?", answer: "समर्पण", time: 20, type: "text" }
            ],
            "Team D": [
                { text: "'भारत को जानो' प्रतियोगिता के प्रथम वर्ष (2001) में लगभग कितने विद्यार्थियों ने सहभागिता की थी?", answer: "एक लाख", time: 20, type: "text" }
            ],
            "Team E": [
                { text: "परिषद् द्वारा प्रकाशित इस 'भारत को जानो' पुस्तक के मुद्रक (Printing Press) का नाम क्या है?", answer: "अमर उजाला", time: 20, type: "text" }
            ]
        }
    },

    // Rapid Fire Round - Grouped by Team (Team A to E)
    "Rapid Fire": {
        "Team A": [
            // सरल स्तर (Easy)
            { text: "भारत का राष्ट्रीय पशु क्या है?", answer: "बाघ", time: 60, type: "text" },
            { text: "भारत का राष्ट्रीय गीत कौन-सा है?", answer: "वन्देमातरम्", time: 60, type: "text" },
            { text: "क्षेत्रफल के आधार पर भारत का सबसे बड़ा जिला कौन-सा है?", answer: "कच्छ", time: 60, type: "text" },
            { text: "भारत की सबसे लम्बी सड़क सुरंग कौन-सी है?", answer: "अटल सुरंग", time: 60, type: "text" },
            { text: "भारत की प्रथम बोलती फिल्म का नाम क्या था?", answer: "आलम आरा", time: 60, type: "text" },
            { text: "भारत की प्रथम महिला मुख्यमंत्री कौन थीं?", answer: "सुचेता कृपलानी", time: 60, type: "text" },
            { text: "भारत की प्रथम महिला राज्यपाल कौन थीं?", answer: "सरोजनी नायडू", time: 60, type: "text" },
            { text: "भारत का सबसे लम्बा समुद्री पुल कौन-सा है?", answer: "मुम्बई ट्रांस हार्बर लिंक", time: 60, type: "text" },
            { text: "भारत का सबसे बड़ा गुरुद्वारा कौन-सा है?", answer: "स्वर्ण मंदिर", time: 60, type: "text" },
            { text: "महात्मा बुद्ध का जन्म किस स्थान पर हुआ था?", answer: "कपिलवस्तु", time: 60, type: "text" },
            { text: "प्रसिद्ध महाकाव्य 'रामचरित मानस' की रचना किसने की थी?", answer: "तुलसीदास", time: 60, type: "text" },
            { text: "आर्य समाज के संस्थापक कौन थे?", answer: "दयानन्द सरस्वती", time: 60, type: "text" },
            { text: "क्रान्तिकारी अखबार 'वन्देमातरम्' का प्रकाशन किसने किया था?", answer: "अरविन्द घोष", time: 60, type: "text" },
            { text: "भारत का सबसे ऊँचा बांध कौन-सा है?", answer: "टिहरी बांध", time: 60, type: "text" },
            { text: "भारत का कौन-सा राज्य 'चीनी का कटोरा' कहलाता है?", answer: "उत्तर प्रदेश", time: 60, type: "text" }
        ],
        "Team B": [
            { text: "भारत का राष्ट्र प्रमुख कौन होता है?", answer: "राष्ट्रपति", time: 60, type: "text" },
            { text: "जनसंख्या की दृष्टि से भारत का सबसे बड़ा राज्य कौन-सा है?", answer: "उत्तर प्रदेश", time: 60, type: "text" },
            { text: "भारत का सबसे ऊँचा ऐतिहासिक मीनार कौन-सा है?", answer: "कुतुब मीनार", time: 60, type: "text" },
            { text: "भारत के प्रथम उप-प्रधानमंत्री कौन थे?", "answer": "सरदार वल्लभ भाई पटेल", time: 60, "type": "text" },
            { text: "भारत रत्न से सम्मानित प्रथम महिला कौन थीं?", answer: "इन्दिरा गाँधी", time: 60, type: "text" },
            { text: "भारत में प्रकाशित प्रथम समाचार पत्र का नाम क्या था?", answer: "बंगाल गजट", time: 60, "type": "text" },
            { text: "भारत का सबसे बड़ा सार्वजनिक बैंक कौन-सा है?", answer: "भारतीय स्टेट बैंक", time: 60, type: "text" },
            { text: "सिन्धु घाटी के लोग मुख्यतः किस देवता की पूजा करते थे?", answer: "पशुपति शिव", time: 60, type: "text" },
            { text: "सम्राट अशोक के पिता का क्या नाम था?", answer: "बिन्दुसार", time: 60, type: "text" },
            { text: "गुलाम वंश की नींव दिल्ली में किसने रखी?", answer: "कुतुबुद्दीन ऐबक", time: 60, type: "text" },
            { text: "मेवाड़ के उस वीर का नाम बताओ जिसके शरीर में 80 घाव थे?", answer: "राणा सांगा", "time": 60, type: "text" },
            { text: "सिख धर्म के संस्थापक और प्रथम गुरु कौन थे?", answer: "गुरु नानक", time: 60, type: "text" },
            { text: "संविधान सभा के प्रथम अध्यक्ष (अस्थायी) कौन थे?", answer: "डॉ. सच्चिदानन्द सिन्हा", time: 60, type: "text" },
            { text: "भारत की अन्तर्राष्ट्रीय सीमा सर्वाधिक किस देश के साथ लगती है?", answer: "बांग्लादेश", time: 60, type: "text" },
            { text: "दक्षिण भारत की सबसे ऊँची पहाड़ी चोटी का नाम क्या है?", answer: "अनाईमुडी", time: 60, type: "text" }
        ],
        "Team C": [
            { text: "भारत का दक्षिणतम बिन्दु कौन-सा है?", answer: "इन्दिरा पॉइण्ट", time: 60, type: "text" },
            { text: "भारत की सबसे बड़ी आवासीय इमारत कौन-सी है?", answer: "राष्ट्रपति भवन", time: 60, type: "text" },
            { text: "भारत का राष्ट्रीय कैलेण्डर कौन-सा है?", answer: "शक संवत्", time: 60, type: "text" },
            { text: "भारत के प्रथम लोकसभा अध्यक्ष कौन थे?", answer: "जी.वी. मावलंकर", time: 60, type: "text" },
            { text: "भारत के प्रथम रक्षा मंत्री कौन थे?", answer: "सरदार बलदेव सिंह", time: 60, type: "text" },
            { text: "एवरेस्ट पर चढ़ने वाली प्रथम भारतीय महिला कौन थीं?", answer: "बछेन्द्री पाल", time: 60, type: "text" },
            { text: "प्रथम एशियाई खेल भारत के किस नगर में खेले गए थे?", answer: "दिल्ली", time: 60, type: "text" },
            { text: "1857 के स्वतंत्रता संग्राम में नाना साहब के वीर सहयोगी कौन थे?", answer: "तात्या टोपे", time: 60, type: "text" },
            { text: "'सर्वेन्ट्स ऑफ इण्डिया सोसाइटी' के संस्थापक कौन थे?", answer: "गोपाल कृष्ण गोखले", time: 60, type: "text" },
            { text: "आजाद हिन्द फौज की महिला वाहिनी का नेतृत्व किसने किया था?", answer: "कैप्टन लक्ष्मी सहगल", time: 60, type: "text" },
            { text: "शिवाजी का राज्यारोहण किस वर्ष हुआ था?", answer: "1674", time: 60, type: "text" },
            { text: "भारत का सबसे बड़ा प्रदर्शनी स्थल कौन-सा है?", answer: "प्रगति मैदान", time: 60, type: "text" },
            { text: "भारत में प्रथम 10 वर्षीय जनगणना का आरंभ कब हुआ था?", answer: "1881", time: 60, type: "text" },
            { text: "स्वतंत्र भारत में प्रथम आम चुनाव किस वर्ष हुए थे?", answer: "1952", time: 60, type: "text" },
            { text: "सिख साम्राज्य के संस्थापक महाराजा रणजीत सिंह की राजधानी कहाँ थी?", answer: "लाहौर", time: 60, type: "text" }
        ],
        "Team D": [
            { text: "भारत में सबसे ऊँचा ऐतिहासिक दरवाजा कौन-सा है?", answer: "बुलन्द दरवाजा", time: 60, type: "text" },
            { text: "भारत का सबसे बड़ा ग्लेशियर कौन-सा है?", answer: "सियाचिन", time: 60, type: "text" },
            { text: "'भारत भारतीयों के लिए' यह नारा किस संस्था ने दिया था?", answer: "आर्य समाज", time: 60, type: "text" },
            { text: "दक्षिण अफ्रीका से लौटकर महात्मा गाँधी ने भारत में अपना प्रथम सफल सत्याग्रह कहाँ किया था?", answer: "चम्पारण", time: 60, type: "text" },
            { text: "नागालैण्ड की युवा स्वतंत्रता सेनानी गैडनिल्यु को 'रानी' उपनाम किसने दिया था?", answer: "जवाहर लाल नेहरु", time: 60, type: "text" },
            { text: "राजा दिलीप ने किसकी रक्षा हेतु स्वयं को सिंह के सामने प्रस्तुत कर दिया था?", answer: "गाय", time: 60, type: "text" },
            { text: "किस राजा ने अपने पुत्र पुरु को अपना बुढ़ापा देकर युवावस्था प्राप्त की थी?", answer: "ययाति", time: 60, type: "text" },
            { text: "बाबर के विरुद्ध 'खानवा' के मैदान में किस राजपूत राजा ने युद्ध किया था?", answer: "राणा सांगा", time: 60, type: "text" },
            { text: "भारत में पंचायती राज व्यवस्था किस समिति की रिपोर्ट के आधार पर शुरू की गई थी?", answer: "बलवंत राय मेहता", time: 60, type: "text" },
            { text: "भारत में सर्वप्रथम नगर निगम कहाँ स्थापित किया गया था?", answer: "चेन्नई", time: 60, type: "text" },
            { text: "भारत का 'रुर' (Ruhr) किस पठार को कहा जाता है?", answer: "छोटानागपुर", time: 60, type: "text" },
            { text: "भारत में बाघ परियोजना (Project Tiger) किस वर्ष शुरू की गई थी?", answer: "1973", time: 60, type: "text" },
            { text: "श्वेत क्रान्ति का संबंध किस उत्पादन से है?", answer: "दुग्ध", time: 60, type: "text" },
            { text: "'चिपको आन्दोलन' भारत के किस राज्य में आरंभ हुआ था?", answer: "उत्तराखण्ड", time: 60, type: "text" },
            { text: "बेतवा नदी किस दिशा से किस दिशा की ओर बहती है?", answer: "दक्षिण से उत्तर", time: 60, type: "text" }
        ],
        "Team E": [
            { text: "भारत का सर्वोच्च राष्ट्रीय नागरिक सम्मान कौन-सा है?", answer: "भारत रत्न", time: 60, type: "text" },
            { text: "भारत का सर्वोच्च शौर्य सम्मान कौन-सा है?", answer: "परमवीर चक्र", time: 60, type: "text" },
            { text: "भारत के प्रथम शिक्षा मंत्री कौन थे?", answer: "अबुल कलाम आज़ाद", time: 60, type: "text" },
            { text: "नोबेल पुरस्कार प्राप्त करने वाले प्रथम भारतीय वैज्ञानिक कौन थे?", answer: "डॉ. सी.वी. रमन", time: 60, type: "text" },
            { text: "भारत की पहली महिला प्रशासनिक अधिकारी (IAS) कौन थीं?", answer: "अन्ना मल्होत्रा", time: 60, type: "text" },
            { text: "भारत की प्रथम महिला आई.पी.एस. (IPS) अधिकारी कौन थीं?", answer: "किरन बेदी", time: 60, type: "text" },
            { text: "भारत का सबसे बड़ा डेल्टा कौन-सा है?", answer: "सुन्दर वन", time: 60, type: "text" },
            { text: "संस्कृत भाषा में बनी भारत की पहली फिल्म कौन-सी है?", answer: "आदि शंकराचार्य", time: 60, type: "text" },
            { text: "ग्रीक यात्री मेगस्थनीज किस सम्राट के शासनकाल में भारत आया था?", answer: "चन्द्रगुप्त मौर्य", time: 60, type: "text" },
            { text: "'नील दर्पण' नाटक का संबंध किस आन्दोलन से है?", answer: "नील किसानों का विद्रोह", time: 60, type: "text" },
            { text: "भारत में स्थापित प्रथम बैंक कौन-सा था?", answer: "बैंक ऑफ हिन्दुस्तान", time: 60, type: "text" },
            { text: "भारत का केन्द्र बिन्दु मध्य प्रदेश के किस गाँव को माना जाता है?", answer: "करौंदी", time: 60, type: "text" },
            { text: "सर्वाधिक जन घनत्व वाला भारतीय राज्य कौन-सा है?", answer: "बिहार", time: 60, type: "text" },
            { text: "'अखिल भारतीय ट्रेड यूनियन कांग्रेस' के प्रथम अध्यक्ष कौन थे?", answer: "लाला लाजपत राय", time: 60, type: "text" },
            { text: "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा जिला कौन-सा है?", answer: "माहे", time: 60, type: "text" }
        ]
    }
};

// 2. Global Variables
let playingTeam = "";
let currentQuestions = [];
let currentIndex = 0;
let timer;
let timeLeft = 0;
let currentMedia = { type: "", src: "" };
// Updated Scores Object for 5 Teams (A, B, C, D, E)
let scoresData = { 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0 };

// 3. DOM Elements
const roundSelect = document.getElementById('round-selector');
const teamSelect = document.getElementById('team-selector');
const subRoundSelect = document.getElementById('sub-round-selector');
const qTracker = document.getElementById('question-tracker');
const qText = document.getElementById('question-text');
const aText = document.getElementById('answer-text');
const timeDisplay = document.getElementById('time-left');
const kbcQuesSound = document.getElementById('kbc-ques-sound');
const kbcTimerSound = document.getElementById('kbc-timer-sound');

function stopKbcSound(audioElement) {
    if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }
}
const mediaElements = {
    picture: document.getElementById('picture-media'),
    video: document.getElementById('video-media'),
    audio: document.getElementById('audio-media')
};
function startTimer() {
    clearInterval(timer); 
    
    // --- KBC Timer Sound ---
    if (kbcTimerSound) {
        stopKbcSound(kbcTimerSound);
        kbcTimerSound.play().catch(e => console.log("Audio play blocked by browser"));
    }

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timeDisplay.textContent = timeLeft;
        } else {
            clearInterval(timer);
            timeDisplay.textContent = "0 (Time's Up!)";
            stopKbcSound(kbcTimerSound); // टाइम अप होने पर साउंड रोक दें
        }
    }, 1000);
}
// 4. Dropdown Handlers
function handleRoundChange() {
    const selectedRound = roundSelect.value;

    // Both Optional Round and Rapid Fire require a Team to be selected first
    if (selectedRound === "Optional Round" || selectedRound === "Rapid Fire") {
        teamSelect.classList.remove('hidden');
        subRoundSelect.classList.add('hidden'); // Keep topic hidden for now

        // Reset selections
        teamSelect.value = "";
        subRoundSelect.value = "";
        currentQuestions = [];

        qText.textContent = `Please select a Team for ${selectedRound}.`;
        qTracker.textContent = selectedRound;
    } else if (selectedRound !== "") {
        // Standard rounds: hide extra dropdowns
        teamSelect.classList.add('hidden');
        subRoundSelect.classList.add('hidden');

        teamSelect.value = "";
        subRoundSelect.value = "";

        currentQuestions = quizData[selectedRound];
        currentIndex = 0;
        playingTeam = "";
        loadQuestion();
    }
}

function handleTeamChange() {
    playingTeam = teamSelect.value;
    const selectedRound = roundSelect.value;

    if (playingTeam !== "") {
        if (selectedRound === "Optional Round") {
            // Optional Round: Show Topics dropdown after team is selected
            subRoundSelect.classList.remove('hidden');
            subRoundSelect.value = "";
            currentQuestions = [];

            qText.textContent = `Please select a topic for ${playingTeam}.`;
            qTracker.textContent = `Optional Round - ${playingTeam}`;
        } else if (selectedRound === "Rapid Fire") {
            // Rapid Fire: Load team questions immediately (No topics needed)
            subRoundSelect.classList.add('hidden');
            currentQuestions = quizData["Rapid Fire"][playingTeam];
            currentIndex = 0;

            qTracker.textContent = `Rapid Fire - ${playingTeam}`;
            loadQuestion();
        }
    } else {
        // If team is deselected
        subRoundSelect.classList.add('hidden');
        qText.textContent = `Please select a Team for ${selectedRound}.`;
    }
}

function handleSubRoundChange() {
    const selectedSubRound = subRoundSelect.value;
    if (selectedSubRound !== "" && playingTeam !== "") {
        // अब यह कोड Topic (जैसे Dharam Sanskriti) और Team (जैसे Team A) दोनों के आधार पर प्रश्न उठाएगा
        currentQuestions = quizData["Optional Round"][selectedSubRound][playingTeam];

        // अगर किसी टीम के लिए प्रश्न नहीं डाले गए हैं, तो खाली Array सेट करें ताकि Error ना आए
        if (!currentQuestions) currentQuestions = [];

        currentIndex = 0;

        qTracker.textContent = `Optional Round - ${playingTeam} (${selectedSubRound})`;
        loadQuestion();
    }
}



// function loadQuestion() {
//     if (!currentQuestions || currentQuestions.length === 0) return;
    
//     const q = currentQuestions[currentIndex];
//     const selectedRound = roundSelect.value;
    
//     // --- Timer Setup ---
//     if (selectedRound !== "Rapid Fire") {
//         clearInterval(timer);
//         timeLeft = q.time;
//         timeDisplay.textContent = timeLeft;
//     } else {
//         if (currentIndex === 0) {
//             clearInterval(timer);
//             timeLeft = 60; // रैपिड फायर के लिए 60 सेकंड
//             timeDisplay.textContent = timeLeft;
//         }
//     }

//     qTracker.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
//     qText.textContent = q.text;
//     aText.textContent = q.answer;
//     aText.classList.add('hidden');
    
//     // Reset media
//     Object.values(mediaElements).forEach(el => el.style.display = "none");

//     // let isVideoOrAudio = false;

//     // // Handle media rendering
//     // if (q.type && mediaElements[q.type]) {
//     //     const mediaEl = mediaElements[q.type];
//     //     mediaEl.src = q.mediaSrc;
//     //     mediaEl.style.display = "block";
        
//     //     // अगर वीडियो या ऑडियो है, तो खत्म होने पर टाइमर चलाएं
//     //     if (q.type === "video" || q.type === "audio") {
//     //         isVideoOrAudio = true;
//     //         mediaEl.load(); 
//     //         mediaEl.onended = () => startTimer();
//     //     }
//     // }

//     // // --- AUTO START TIMER LOGIC ---
//     // // अगर प्रश्न टेक्स्ट या पिक्चर है, तो तुरंत टाइमर शुरू कर दें
//     // if (!isVideoOrAudio) {
//     //     if (selectedRound === "Rapid Fire") {
//     //         // रैपिड फायर में सिर्फ पहले प्रश्न पर टाइमर स्टार्ट करें, बाकी में बैकग्राउंड में चलता रहेगा
//     //         if (currentIndex === 0) {
//     //             startTimer();
//     //         }
//     //     } else {
//     //         // Passing, Optional और Picture राउंड में तुरंत स्टार्ट करें
//     //         startTimer();
//     //     }
//     // }
//     // नया "Show Media" बटन खोजें और उसे पहले छुपा दें
//     const mediaBtn = document.getElementById('show-media-btn');
//     if (mediaBtn) mediaBtn.classList.add('hidden');

//     // चेक करें कि प्रश्न में कोई मीडिया है या नहीं
//     let hasMedia = (q.type === "video" || q.type === "audio" || q.type === "picture");

//     // --- 3. Media & Auto-Timer Logic ---
//     if (hasMedia) {
//         // अगर मीडिया है, तो डेटा को मोडल के लिए सेव करें और "Show Media" बटन दिखाएं
//         currentMedia.type = q.type;
//         currentMedia.src = q.mediaSrc;
        
//         if (mediaBtn) mediaBtn.classList.remove('hidden');
        
//         // नोट: यहाँ टाइमर स्टार्ट नहीं होगा। टाइमर तब स्टार्ट होगा जब आप `closeMediaModal()` कॉल करेंगे।
//     } else {
//         // अगर कोई मीडिया नहीं है (सिर्फ टेक्स्ट है), तो तुरंत टाइमर स्टार्ट कर दें
//         if (selectedRound === "Rapid Fire") {
//             // रैपिड फायर में सिर्फ पहले प्रश्न पर
//             if (currentIndex === 0) {
//                 startTimer();
//             }
//         } else {
//             // बाकी सभी नॉर्मल टेक्स्ट राउंड्स में तुरंत स्टार्ट
//             startTimer();
//         }
//     }
// }

function loadQuestion() {
    if (!currentQuestions || currentQuestions.length === 0) return;
    
    const q = currentQuestions[currentIndex];
    const selectedRound = roundSelect.value;
    
    // 1. Timer Reset
    if (selectedRound !== "Rapid Fire") {
        clearInterval(timer);
        timeLeft = q.time;
        timeDisplay.textContent = timeLeft;
    } else {
        if (currentIndex === 0) {
            clearInterval(timer);
            timeLeft = 60;
            timeDisplay.textContent = timeLeft;
        }
    }

    // 2. Hide everything initially for Suspense
    qTracker.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
    
    qText.textContent = q.text;
    qText.classList.remove('reveal-question');
    qText.classList.add('hide-question'); 
    
    aText.textContent = q.answer;
    aText.classList.add('hidden');

    Object.values(mediaElements).forEach(el => el.style.display = "none");
    const mediaBtn = document.getElementById('show-media-btn');
    if (mediaBtn) mediaBtn.classList.add('hidden');

    let hasMedia = (q.type === "video" || q.type === "audio" || q.type === "picture");
    if (hasMedia) {
        currentMedia.type = q.type;
        currentMedia.src = q.mediaSrc;
    }

    // 3. Action to perform AFTER sound finishes
    const showQuestionAndContinue = () => {
        qText.classList.remove('hide-question');
        qText.classList.add('reveal-question');
        
        if (hasMedia) {
            if (mediaBtn) mediaBtn.classList.remove('hidden');
        } else {
            if (selectedRound === "Rapid Fire") {
                if (currentIndex === 0) startTimer(); 
            } else {
                startTimer(); 
            }
        }
    };

    // 4. Sound Logic (FIXED FOR RAPID FIRE)
    // Agar Rapid Fire nahi hai, ya Rapid Fire ka pehla question hai, tabhi timer sound reset hoga
    if (selectedRound !== "Rapid Fire" || currentIndex === 0) {
        stopKbcSound(kbcTimerSound);
    }
    
    if (selectedRound === "Rapid Fire") {
        // Rapid fire mein question aate hi sidha aage badhega aur purana timer sound chalta rahega
        showQuestionAndContinue();
    } else {
        // Baaki rounds ke liye KBC question sound chalega
        if (kbcQuesSound) {
            stopKbcSound(kbcQuesSound);
            let playPromise = kbcQuesSound.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    kbcQuesSound.onended = showQuestionAndContinue;
                }).catch(error => {
                    showQuestionAndContinue(); 
                });
            }
        } else {
            showQuestionAndContinue();
        }
    }
}


function openMediaModal() {
    document.getElementById('media-modal').classList.remove('hidden');
    const modalPic = document.getElementById('modal-picture');
    const modalVid = document.getElementById('modal-video');
    const modalAud = document.getElementById('modal-audio');
    
    modalPic.style.display = "none";
    modalVid.style.display = "none";
    modalAud.style.display = "none";

    if (currentMedia.type === "picture") {
        modalPic.src = currentMedia.src;
        modalPic.style.display = "block";
    } else if (currentMedia.type === "video") {
        modalVid.src = currentMedia.src;
        modalVid.style.display = "block";
        modalVid.load();
        modalVid.play();
    } else if (currentMedia.type === "audio") {
        modalAud.src = currentMedia.src;
        modalAud.style.display = "block";
        modalAud.load();
        modalAud.play();
    }
}

function closeMediaModal() {
    document.getElementById('media-modal').classList.add('hidden');
    const modalVid = document.getElementById('modal-video');
    const modalAud = document.getElementById('modal-audio');
    
    // Video/Audio band karein
    modalVid.pause();
    modalAud.pause();
    
    // Jaise hi KBC style modal band hoga, timer shuru ho jayega!
    if (roundSelect.value !== "Rapid Fire") {
        startTimer();
    }
}

function showAnswer() {
    if (currentQuestions.length > 0) {
        if (aText.classList.contains('hidden')) {
            aText.classList.remove('hidden');
            
            if (roundSelect.value !== "Rapid Fire") {
                clearInterval(timer); 
                // --- उत्तर दिखाते ही टाइमर की टिक-टिक (साउंड) रोक दें ---
                stopKbcSound(kbcTimerSound);
            }
        } else {
            aText.classList.add('hidden'); 
        }
    }
}


function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
}



// 6. Scoring Logic
// Function to handle UI button clicks (+10 or -5)
function updateScore(teamLetter, points) {
    scoresData[teamLetter] += points;
    document.getElementById(`score-${teamLetter}`).textContent = scoresData[teamLetter];
}



// Keyboard Scoring and Controls
document.addEventListener('keydown', (event) => {
    // अगर होस्ट किसी Dropdown (Select) में कुछ चुन रहा है, तो शॉर्टकट ट्रिगर ना हों
    if (event.target.tagName === 'SELECT' || event.target.tagName === 'INPUT') {
        return;
    }

    // --- 1. Scoring Logic (Keys 1-5 for Teams A-E) ---
    const keyMap = {
        'Digit1': 'A', 'Numpad1': 'A',
        'Digit2': 'B', 'Numpad2': 'B',
        'Digit3': 'C', 'Numpad3': 'C',
        'Digit4': 'D', 'Numpad4': 'D',
        'Digit5': 'E', 'Numpad5': 'E'
    };

    if (keyMap[event.code]) {
        let teamLetter = keyMap[event.code];
        if (event.shiftKey) {
            updateScore(teamLetter, -5);
        } else {
            updateScore(teamLetter, 10);
        }
    }

    // --- 2. Quiz Controls Shortcuts ---
    if (event.code === 'ArrowRight') {
        // Right Arrow (➡) -> Next Question
        nextQuestion();
    }
    else if (event.code === 'ArrowLeft') {
        // Left Arrow (⬅) -> Previous Question
        prevQuestion();
    }
    else if (event.code === 'Space' || event.code === 'Enter') {
        // Spacebar या Enter -> Show/Hide Answer (Toggle)
        event.preventDefault(); // Space दबाने पर स्क्रीन नीचे स्क्रॉल होने से रोकेगा
        showAnswer();
    }
    else if (event.code === 'KeyT') {
        // 'T' बटन -> Start Timer
        startTimer();
    }
});

// =========================================================
// 7. RESULTS & RANKING LOGIC
// =========================================================
function showFinalResults() {
    // 1. Array banayein jisme sabhi teams aur unke scores hon
    let teamsArr = [
        { name: "Team A", score: scoresData['A'] },
        { name: "Team B", score: scoresData['B'] },
        { name: "Team C", score: scoresData['C'] },
        { name: "Team D", score: scoresData['D'] },
        { name: "Team E", score: scoresData['E'] }
    ];

    // 2. Scores ke basis par array ko sort karein (Highest to Lowest)
    teamsArr.sort((a, b) => b.score - a.score);

    // 3. HTML Elements mein Top 3 Teams ka data feed karein
    // 1st Place
    document.getElementById('team-1st').textContent = teamsArr[0].name;
    document.getElementById('score-1st').textContent = teamsArr[0].score;

    // 2nd Place
    document.getElementById('team-2nd').textContent = teamsArr[1].name;
    document.getElementById('score-2nd').textContent = teamsArr[1].score;

    // 3rd Place
    document.getElementById('team-3rd').textContent = teamsArr[2].name;
    document.getElementById('score-3rd').textContent = teamsArr[2].score;

    // 4. Modal (Popup) ko show karein
    document.getElementById('results-modal').classList.remove('hidden');
}

function closeResults() {
    document.getElementById('results-modal').classList.add('hidden');
}