package models

import scala.slick.driver.PostgresDriver
import scala.slick.driver.PostgresDriver.simple._
import play.api.Play.current
import play.api.data.Forms._
/**
 * Created by henrique on 20/06/15.
 */

case class NightClub(
                 cnpj : String,
                 email: String,
                 password: String,
                 clubName: String,
                 telephone: Option[String] = None,
                 cep : String,
                 city : String,
                 state : String,
                 address : String)

class NightClubs(tag: Tag) extends Table[NightClub](tag,"night_club"){
  def cnpj = column[String]("cnpj", O.PrimaryKey)
  def email = column[String]("email", O.NotNull)
  def password = column[String]("password", O.NotNull)
  def clubName = column[String]("club_name", O.NotNull)
  def telephone = column[String]("telephone")
  def cep = column[String]("cep", O.NotNull)
  def city = column[String]("city", O.NotNull)
  def state = column[String]("state", O.NotNull)
  def address = column[String]("address", O.NotNull)

  def * = (cnpj, email, password, clubName, telephone.?, cep, city, state, address) <> (NightClub.tupled, NightClub.unapply)
}

object NightClubs {
  val db = play.api.db.slick.DB
  val nightclubs = TableQuery[NightClubs]
  def all: List[NightClub] = db.withSession { implicit session =>
    nightclubs.sortBy(_.email.asc).list
  }
  def create(newClub: NightClub): Boolean = db.withTransaction{ implicit session =>
    if (!nightclubs.filter(_.cnpj === newClub.cnpj).exists.run) {
      nightclubs += newClub
      true
    } else {false}
  }
  def findByEmail(emailId: String, pass: String): NightClub = db.withSession{ implicit session =>
    nightclubs.filter(_.email === emailId).filter(_.password === pass).first
  }
  def find(cnpj: String): NightClub = db.withSession{ implicit session =>
    nightclubs.filter(_.cnpj === cnpj).first
  }
  def update(updateNightCLub: NightClub): Int = db.withTransaction{ implicit session =>
    nightclubs.filter(_.cnpj === updateNightCLub.cnpj).update(updateNightCLub)
  }
  def delete(cnpj: String): Int = db.withTransaction{ implicit session =>
    nightclubs.filter(_.cnpj === cnpj).delete
  }
}
