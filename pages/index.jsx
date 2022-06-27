import NavBar from '/source/components/NavBar'
import Hosting from '/source/components/Widgets/Hosting'

export default function Index() {
  return (
    <>
      <NavBar />

      <div className="container mx-auto grid sm:grid-cols-2 gap-6 justify-center">
        <div>
          <Hosting 
            name="My Services"
            hosted={[
              { tag: "th01", name: "BookStack", description: "Collection of notes and scripts", link: "https://wiki.thijmenheuvelink.nl"},
            ]}
          />
        </div>

        <div className="grid gap-6">
          <Hosting 
            name="Clients"
            hosted={[
              { tag: "as01", name: "Nginx Web Server", description: "Business Portfolio", link: "https://adelsankari.nl"},
              { tag: "as02", name: "Wordpress installation", description: "3D Printing Webshop", link: "https://3d.adelsankari.nl"},
              { tag: "nb01", name: "Wordpress installation", description: "Crochet Webshop", link: "https://nb01.thijmenheuvelink.nl"},
            ]}
          />

          <Hosting 
            name="Aventus"
            hosted={[
              { tag: "cx01", name: "Project Crex", description: "Aventus - Simulated Crypto Exchange", link: "https://crex-aventus.thijmenheuvelink.nl"},
              { tag: "wa01", name: "Weather API", description: "Aventus - Weather indicator", link: "https://wa01-aventus.thijmenheuvelink.nl"},
              { tag: "wa02", name: "WeA API", description: "Aventus - Recipe Web App", link: "https://wa02-aventus.thijmenheuvelink.nl"},
              { tag: "fr01", name: "FAPI", description: "Aventus - Face Recognition AI", link: "https://fr01-aventus.thijmenheuvelink.nl"},
            ]}
          />
        </div>
      </div>

      <p className="text-center mt-16 bg-teal-600 text-white font-bold p-6">This website is under development.</p>
    </>
  )
}
