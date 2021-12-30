using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using Blockchain.Models.Entity;

namespace Blockchain.Controllers
{
    public class LoginController : Controller
    {
        BlockchainDBEntities4 db = new BlockchainDBEntities4();
        // GET: Login
        
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        // Login işlemlerinin yapıldığı kısım
        public ActionResult Login(kullanici kullanici)
        {
            // kullanıcının username ve sifre girip  girmediği kontrol edilir
            var bilgiler = db.kullanici.FirstOrDefault(x => x.userName == kullanici.userName && x.sifre == kullanici.sifre);
            
            if (bilgiler!=null)
            {
                // Giriş bilgileri cookielerde ve session yapılarında tutulur
                FormsAuthentication.SetAuthCookie(bilgiler.userName, false);
                Session["kullanici"] = bilgiler.userName.ToString();
                Session["admin"] = bilgiler.yetki.ToString();
                
                return RedirectToAction("Index", "Urun");
            }
            else
            {

                return View();
            }
            
        }
        public ActionResult LogOut()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Login", "Login");
        }
    }
}