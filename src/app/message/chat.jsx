"use client";

import * as Ably from "ably";
import ChatBox from "./chat-box.jsx";

export default function Chat() {
  const client = new Ably.Realtime({
    key: "bO1ogw.kDT-JA:ssv83W_EnjCV3Ekfn8ASlOMSWMiZkT2ZlCS0MzH3ZJM",
  });
  return <ChatBox />;
}
