const users = [
    {
        id: 0,
        bgImags: {
            img1: "https://images.unsplash.com/photo-1724382057884-c6f06cae3dff?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://images.unsplash.com/photo-1741986947217-d1a0ecc39149?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3: "https://images.unsplash.com/photo-1734700920704-1e8000437a00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        profileImg: {
            img: "https://plus.unsplash.com/premium_photo-1691030256091-8d3733f8b6d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVerified: true,
            verifiedImg: "https://example.com/verified-badge.png"
        },
        names: {
            userId: "aestheticX9087",
            userName: "Aarav Mehta"
        },
        userBio: "Frontend wizard 🌟 | Coffee + Code ☕💻",
        socials: {
            media: 5,
            followers: 12890,
            following: 320
        },
        isFriend: true
    },
    {
        id: 1,
        bgImags: {
            img1: "https://images.unsplash.com/photo-1719705755406-39bfa6187097?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://images.unsplash.com/photo-1741766135929-287964835471?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3: "https://images.unsplash.com/photo-1736580602638-c5f157d6d6fb?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        profileImg: {
            img: "https://images.unsplash.com/photo-1742038107108-3bdda21485d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVerified: false,
            verifiedImg: ""
        },
        names: {
            userId: "designGuru449",
            userName: "Sneha Kapoor"
        },
        userBio: "UI/UX Designer 🎨 | Dreamer | Dog Mom 🐶",
        socials: {
            media: 3,
            followers: 6520,
            following: 210
        },
        isFriend: false
    },
    {
        id: 2,
        bgImags: {
            img1: "https://images.unsplash.com/photo-1741230297079-55b8133ab5ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://images.unsplash.com/photo-1742766445151-bff5eb7173d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3: "https://images.unsplash.com/photo-1742626157100-a25483dda2ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        profileImg: {
            img: "https://images.unsplash.com/photo-1659421614911-e77b65eb368a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVerified: true,
            verifiedImg: "https://example.com/verified-badge.png"
        },
        names: {
            userId: "devKing321",
            userName: "Rohan Verma"
        },
        userBio: "Full Stack Dev 🚀 | Building things @Scale",
        socials: {
            media: 4,
            followers: 10400,
            following: 450
        },
        isFriend: true
    },
    {
        id: 3,
        bgImags: {
            img1: "https://images.unsplash.com/photo-1742766330337-1127275cd9b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://images.unsplash.com/photo-1742268351241-b1b2ccae70c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3: "https://images.unsplash.com/photo-1740188305229-63c68ef04712?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        profileImg: {
            img: "https://images.unsplash.com/photo-1664636404761-d3aa86169911?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVerified: false,
            verifiedImg: ""
        },
        names: {
            userId: "pixelGirl777",
            userName: "Tanya Roy"
        },
        userBio: "Illustrator 🎨 | Anime Fan ❤️ | Tea > Coffee ☕",
        socials: {
            media: 2,
            followers: 3900,
            following: 178
        },
        isFriend: false
    },
    {
        id: 4,
        bgImags: {
            img1: "https://images.unsplash.com/photo-1742268351428-ba1366f7dae3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://images.unsplash.com/photo-1742054294284-baa5691ede46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3: "https://plus.unsplash.com/premium_photo-1739959814831-dfb02115443c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        profileImg: {
            img: "https://images.unsplash.com/photo-1559555869-07e8ef7f95c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVerified: true,
            verifiedImg: "https://example.com/verified-badge.png"
        },
        names: {
            userId: "codePanther900",
            userName: "Arjun Das"
        },
        userBio: "Code. Sleep. Repeat. 💻 | Gym Rat 🏋️",
        socials: {
            media: 6,
            followers: 16800,
            following: 320
        },
        isFriend: true
    },
    {
        id: 5,
        bgImags: {
            img1: "https://plus.unsplash.com/premium_photo-1742317366931-686693770441?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://images.unsplash.com/photo-1741715651744-81c5d5e6a3ff?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3: "https://plus.unsplash.com/premium_photo-1741194732682-21f3046cf1a6?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        profileImg: {
            img: "https://images.unsplash.com/photo-1660067262025-271603ac1283?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVerified: false,
            verifiedImg: ""
        },
        names: {
            userId: "dataDreamer876",
            userName: "Nikita Sharma"
        },
        userBio: "Data Scientist 📊 | Always exploring 🔍",
        socials: {
            media: 4,
            followers: 7200,
            following: 390
        },
        isFriend: true
    },
    {
        id: 6,
        bgImags: {
            img1: "https://images.unsplash.com/photo-1742105682489-94149abb1009?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://images.unsplash.com/photo-1741850821875-926bc6332d97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3: "https://images.unsplash.com/photo-1741850821836-a0228e561406?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        profileImg: {
            img: "https://images.unsplash.com/photo-1738079264549-50006a1826ca?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVerified: true,
            verifiedImg: "https://example.com/verified-badge.png"
        },
        names: {
            userId: "cyberWolf303",
            userName: "Vikram Singh"
        },
        userBio: "Cybersecurity ⚔️ | Hacker in hoodie 🧥",
        socials: {
            media: 5,
            followers: 20100,
            following: 480
        },
        isFriend: false
    },
    {
        id: 7,
        bgImags: {
            img1: "https://images.unsplash.com/photo-1742925602071-55faa315e3aa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://images.unsplash.com/photo-1742268351444-7e153a9fb747?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3: "https://images.unsplash.com/photo-1742943679519-bb9eb364b152?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        profileImg: {
            img: "https://images.unsplash.com/photo-1729101143873-d80050bae219?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVerified: true,
            verifiedImg: "https://example.com/verified-badge.png"
        },
        names: {
            userId: "artStorm522",
            userName: "Meera Patel"
        },
        userBio: "Creative soul 🌈 | Illustrator & Designer",
        socials: {
            media: 3,
            followers: 8700,
            following: 260
        },
        isFriend: true
    },
    {
        id: 8,
        bgImags: {
            img1: "https://plus.unsplash.com/premium_photo-1741954382248-d6614bdbc44d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://images.unsplash.com/photo-1742925602110-aca7ce746a14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3: "https://images.unsplash.com/photo-1742268350489-e5d1c0616c54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        profileImg: {
            img: "https://images.unsplash.com/photo-1667839410402-c4266dc7f1d0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVerified: false,
            verifiedImg: ""
        },
        names: {
            userId: "gadgetGeek412",
            userName: "Ritesh Gupta"
        },
        userBio: "Tech reviewer 📱 | Gadget junkie 💡",
        socials: {
            media: 4,
            followers: 11300,
            following: 370
        },
        isFriend: false
    },
    {
        id: 9,
        bgImags: {
            img1: "https://plus.unsplash.com/premium_photo-1674498270498-84889156da0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://images.unsplash.com/photo-1743031031853-15698b5b8419?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3: "https://images.unsplash.com/photo-1742925602178-0f5939ee6845?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        profileImg: {
            img: "https://images.unsplash.com/photo-1610317301682-45ccfe85bd49?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVerified: true,
            verifiedImg: "https://example.com/verified-badge.png"
        },
        names: {
            userId: "skyRider799",
            userName: "Ishaan Kapoor"
        },
        userBio: "Traveler 🌍 | Drone pilot 🚁 | Storyteller",
        socials: {
            media: 6,
            followers: 19300,
            following: 510
        },
        isFriend: true
    }
];

const container = document.querySelector('.container')

function userCards() {
    let cards = '';

    users.forEach((ele) => {
        let followers = ((ele.socials.followers) / 1000).toFixed(1);
        let friends = ele.isFriend;
        let bg = ''

        if (friends) {
            bg = 'style="background-color: white; color: blue;';
        }

        cards += `<div class="card">
            <div class="bg-images">
                <div class="img-container">
                    <img src="${ele.bgImags.img1}"
                        alt="images">
                </div>
                <div class="img-container">
                    <img src="${ele.bgImags.img2}"
                        alt="images">
                </div>
                <div class="img-container">
                    <img src="${ele.bgImags.img3}"
                        alt="images">
                </div>
            </div>
            <div class="user-profile">
                <div class="user-img">
                     <img src="${ele.profileImg.img}"
                        alt="user image"> 
                </div>
                <div class="name-id">
                    <h1 class="user-id title2">${ele.names.userId}</h1>
                    <h5 class="user-name title">${ele.names.userName}</h5>
                </div>
                <div class="bio title">
                ${ele.userBio}
                </div>
                <div class="socials">
                    <div class="media">
                        <h1 class="title2">${ele.socials.media}</h1>
                        <h5 class="title">Media</h5>
                    </div>
                    <div class="follower">
                        <h1 class="title2">${followers}k</h1>
                        <h5 class="title">Followers</h5>
                    </div>
                    <div class="following">
                        <h1 class="title2">${ele.socials.following}</h1>
                        <h5 class="title">Following</h5>
                    </div>
                </div>
                <button id="${ele.id}" ${bg}  class="follow-unfollow">${(friends) ? "Unfollow" : "Follow"}</button>
            </div>
        </div>`;
    });

    container.innerHTML = cards
}

userCards()

container.addEventListener('click', (e) => {

    const ID = e.target.id;
    let obj = users[ID];

    if (ID >= 0) {
        if(obj.isFriend){
            obj.isFriend = false;
        }else{
            obj.isFriend = true;
        }
    }

    userCards()
})