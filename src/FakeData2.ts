const fakeData2 = {
  allData: [
      { id: 0, userName: "Kim", userId: 15, title: "array.map 어떻게 사용하죠", body: "지금 개발 처음인데 어떻게 하면 되죠?", answers: [{ id: 0, userId: 5, userName: "kimcoding", qTitle: "array.map 어떻게 사용하죠", body: "이렇게 하면 됩니다", likes: 5, createdAt: "2021-05-04" }], likes: 5, tags: ["array", "javascript"], createdAt: "2021-05-04" },
      { id: 1, userName: "Park", userId: 17, title: "array.reduce 어떻게 사용하죠", body: "지금 개발 처음인데 어떻게 하면 되죠?", answers: [{ id: 0, userId: 3, userName: "mooncoding", qTitle: "array.reduce 어떻게 사용하죠", body: "이렇게 하면 됩니다", likes: 3, createdAt: "2021-05-25" }], likes: 10, tags: ["array", "javascript"], createdAt: "2021-05-21" },
      { id: 2, userName: "Lee", userId: 3, title: "array.filter 어떻게 사용하죠", body: "지금 개발 처음인데 어떻게 하면 되죠?", answers: [{ id: 0, userId: 13, userName: "leecoding", qTitle: "array.filter 어떻게 사용하죠", body: "이렇게 하면 됩니다", likes: 1, createdAt: "2021-05-25" }], likes: 3, tags: ["array", "javascript"], createdAt: "2021-05-22" }
    ],
  myData: {
    id: 5,
    userName: "kimcoding",
    profile: "",
    questions: [
      { id: 0, userId: 5, userName: "kimcoding", title: "object.assign 어떻게 사용하나요1", body: "개발 처음이라 모르겠습니다", answers: [{ id: 0, userId: 6, userName: "moon", qTitle: "object.assign 어떻게 사용하나요1", body: "그건 이렇게 하면 됩니다", likes: 1, createdAt: "2021-05-04" }], likes: 5, tags: ["array", "object"], createdAt: "2021-05-04" },
      { id: 1, userId: 5, userName: "kimcoding", title: "object.assign 어떻게 사용하나요2", body: "개발 처음이라 모르겠습니다", answers: [{ id: 1, userId: 15, userName: "sun", qTitle: "object.assign 어떻게 사용하나요2", body: "그건 이렇게 하면 됩니다", likes: 2, createdAt: "2021-05-04" }], likes: 6, tags: ["coding", "javascript"], createdAt: "2021-05-17" },
      { id: 2, userId: 5, userName: "kimcoding", title: "object.assign 어떻게 사용하나요3", body: "개발 처음이라 모르겠습니다", answers: [{ id: 2, userId: 3, userName: "son", qTitle: "object.assign 어떻게 사용하나요3", body: "그건 이렇게 하면 됩니다", likes: 3, createdAt: "2021-05-04" }], likes: 14, tags: ["java", "C++"], createdAt: "2021-05-13" },
    ],
    answers: [
        { id: 0, userId: 5, userName: "kimcoding", qTitle: "array.map 어떻게 사용하죠", body: "이렇게 하면 됩니다", likes: 5, createdAt: "2021-05-04" },
],
  },
};

export default fakeData2;
