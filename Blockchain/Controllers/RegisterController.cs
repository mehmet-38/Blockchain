using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Blockchain.Models.Entity;

namespace Blockchain.Controllers
{
    public class RegisterController : Controller
    {
        // GET: Register
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Register()
        {
            kullanici kullaniciModel = new kullanici();
            return View(kullaniciModel);
        }
        [HttpPost]
        // Kullanıcı bilgilerini girerek sisteme kayıt olur
        public ActionResult Register(kullanici kullaniciModel)
        {
            using (BlockchainDBEntities4 db = new BlockchainDBEntities4())
            {

                db.kullanici.Add(kullaniciModel);
                db.SaveChanges();
            }
            ModelState.Clear();

            return View("Register", new kullanici());
        }
    }
}