import { 
  TransactionEvent, 
  Finding, 
  HandleTransaction, 
  FindingSeverity, 
  FindingType,

  Trace,
  

} from 'forta-agent'

const handleTransaction: HandleTransaction = async (txEvent: TransactionEvent) => {
  const findings: Finding[] = [];
  console.log(txEvent.to)
  txEvent.traces.forEach((trace:Trace) =>{
    if (trace.error==="Reverted"){
      findings.push(
        Finding.fromObject({
          name: "InternalFailure",
          description: `Transaction internal Failure Detected`,
          alertId: "FORTA-210",
          severity: FindingSeverity.High,
          type: FindingType.Suspicious,
          metadata: {
            hash: txEvent.hash
          },
        })
       )
      
    }

  })
  return findings;
}

export default {
  handleTransaction
}