import awsLogo from "@/assets/misc/aws.png"
function Certificates() {
  return (
    <div>
      <h1 style={{ marginTop: '35px' }}>Certificates</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img src={awsLogo} alt="AWS Logo" className="small-img" />
        <h2>
          Amazon Web Services Cloud Practitioner
        </h2>
      </div>
      
    </div>
  )
}

export default Certificates