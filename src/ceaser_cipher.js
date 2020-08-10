const ceaser = {
    encryption: {
        a: "b",
        b: "c",
        c: "d",
        d: "e",
        e: "f",
        f: "g",
        g: "h",
        h: "i",
        i: "j",
        j: "k",
        k: "l",
        l: "m",
        m: "n",
        n: "o",
        o: "p",
        p: "q",
        q: "r",
        r: "s",
        s: "t",
        t: "u",
        u: "v",
        v: "w",
        w: "x",
        x: "y",
        y: "z",
        z: "a"
    },
    decryption: {
        b : "a",
        c : "b",
        d : "c",
        e : "d",
        f : "e",
        g : "f",
        h : "g",
        i : "h",
        j : "i",
        k : "j",
        l : "k",
        m : "l",
        n : "m",
        o : "n",
        p : "o",
        q : "p",
        r : "q",
        s : "r",
        t : "s",
        u : "t",
        v : "u",
        w : "v",
        x : "w",
        y : "x",
        z : "y",
        a : "z"
    },
    cipher: (string) => {
        let newStr = ''
        for (let i = 0; i < string.length; i += 1){
            newStr += ceaser.encryption[string[i]]
        }
        return newStr
    },
    decipher: (string) => {
        let newStr = ''
        for (let i = 0; i < string.length; i += 1){
            newStr += ceaser.decryption[string[i]]
        }
        return newStr
    }
}

export default ceaser