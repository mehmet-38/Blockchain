using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Blockchain.Models.Entity;

namespace Blockchain.Controllers
{
    public class UrunController : Controller
    {
        BlockchainDBEntities4 db = new BlockchainDBEntities4();
        // GET: Deneme
        
        [HttpPost]
        [Authorize]
        // Satış işlemi yapıldıktan sonra veritabanına kaydetme işlemi
        public ActionResult Index(satis satis)
        {
           
            db.satis.Add(satis);
            db.SaveChanges();

            
            return RedirectToAction("Index","Urun");
        }
        
        [HttpGet]
        [Authorize]
        public ActionResult Index()
        {

           
            ViewBag.kullanici = Session["kullanici"];

            //var values = db.fn_UrunDetay().ToList();
            var values = db.urunler.ToList();
            
            return View(values);
        }
        
        [HttpGet]
        // Kategorileri databaseden dropdown da gösterme
        public ActionResult UrunSat()
        {
            List<SelectListItem> katValues = (from i in db.kategori.ToList()
                                              select new SelectListItem
                                              {
                                                  Text = i.kategoriAd,
                                                  Value = i.kategoriId.ToString()


                                              }).ToList();
            ViewBag.kategoriler = katValues;

            
            ViewBag.kullanici2 = Session["kullanici"];
            return View();
        }
        [HttpPost]
        // Ürünü dropdown da seçtiğimiz kategoriye göre veritabanına kaydeder
        public ActionResult UrunSat(urunler p1)
        {
            var ktg = db.kategori.Where(m => m.kategoriId == p1.kategori1.kategoriId).FirstOrDefault();
            p1.kategori1 = ktg;
            if (!ModelState.IsValid)
            {
                return View("UrunSat");
            }
            db.urunler.Add(p1);
            
            db.SaveChanges();
            return RedirectToAction("Index","Urun");

          
        }
        
    }
}