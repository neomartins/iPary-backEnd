package models

import scala.slick.driver.PostgresDriver
import scala.slick.driver.PostgresDriver.simple._
import play.api.Play.current
import play.api.data.Forms._
/**
 * Created by henrique on 20/06/15.
 */

case class NightClub(
                 email: String,
                 cnpj : String,
                 password: String,
                 clubName: String,
                 telephone: Option[String] = None,
                 cep : String,
                 city : String,
                 state : String,
                 address : String)

class NightClubs(tag: Tag) extends Table[NightClub](tag,"night_club"){
  def email = column[String]("email", O.PrimaryKey)
  def cnpj = column[String]("cnpj", O.NotNull)
  def password = column[String]("password", O.NotNull)
  def clubName = column[String]("clubName", O.NotNull)
  def telephone = column[String]("telephone")
  def cep = column[String]("cep", O.NotNull)
  def city = column[String]("city", O.NotNull)
  def state = column[String]("state", O.NotNull)
  def address = column[String]("address", O.NotNull)

  def * = (email, cnpj, password, clubName, telephone.?, cep, city, state, address) <> (NightClub.tupled, NightClub.unapply)
}

object NightClubs {
  val db = play.api.db.slick.DB
  val nightclubs = TableQuery[NightClubs]
  def all: List[NightClub] = db.withSession { implicit session =>
    nightclubs.sortBy(_.email.asc).list
  }
  def create(newClub: NightClub): Boolean = db.withTransaction{ implicit session =>
    if (!nightclubs.filter(_.email === newClub.email).exists.run) {
      nightclubs += newClub
      true
    } else {false}
  }
  def find(emailId: String): NightClub = db.withSession{ implicit session =>
    nightclubs.filter(_.email === emailId).first
  }
  def update(updateNightCLub: NightClub): Int = db.withTransaction{ implicit session =>
    nightclubs.filter(_.email === updateNightCLub.email).update(updateNightCLub)
  }
  def delete(email: String): Int = db.withTransaction{ implicit session =>
    nightclubs.filter(_.email === email).delete
  }
}
