import {
    createTransactionEvent,
    HandleBlock,
    HandleTransaction
  } from "forta-agent"
  import agent from "./agent"
  
  describe("internal failure agent", () => {
    let handleTransaction: HandleTransaction
  
    const createTxEventWithTraces = () => createTransactionEvent({
      transaction:{
        hash:"0xb48ff57326966812864ddfbf57e9a5540d334d9f6e7c42804b44bd1d37b63199",
        to:null,
        from:"123",
        nonce:1,
        gas:"",
        gasPrice:"",
        value:"",
        data:"",
        r:"",
        s:"",
        v:""

        
      },
      type:undefined,
      network:undefined,
      receipt: {
        status:true,
        root:"",
        gasUsed:"",
        cumulativeGasUsed:"",
        logsBloom:"",
        logs:{} as any,
        contractAddress:"0x095f385be1e631ffdd7c1ac54dfcef6ed868eb36",
        blockHash:"",
        blockNumber:1,
        transactionHash:"",
        transactionIndex:1

      },
      traces:[
        {... {} as any, error:"Reverted"},
        {... {} as any, error:"Reverted"}
      ],
      block:{}as any


    })
  
    beforeAll(() => {
      handleTransaction = agent.handleTransaction
    })
  
    describe("token event", () => {
      it("trace detected", async () => {
        const txEvent = createTxEventWithTraces()
  
        const findings = await handleTransaction(txEvent)
  
        expect(findings.length).toEqual(2)
      })
  
    })
  })