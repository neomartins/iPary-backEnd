package models

import java.sql.Date

import scala.slick.driver.PostgresDriver
import scala.slick.driver.PostgresDriver.simple._
import play.api.Play.current
import play.api.data.Forms._

/**
 * Created by henrique on 23/06/15.
 */
case class Event(
                      name: String,
                      date : Date,
                      clientMax: Int,
                      maleTicket: Int,
                      femaleTicket: Int,
                      description : Option[String] = None,
                      style :  Option[String] = None)

class Events(tag: Tag) extends Table[Event](tag,"event"){
  def name = column[String]("name", O.PrimaryKey)
  def date = column[Date]("event_date", O.NotNull)
  def clientMax = column[Int]("clientMax", O.NotNull)
  def maleTicket = column[Int]("maleTicket", O.NotNull)
  def femaleTicket = column[Int]("femaleTicket", O.NotNull)
  def description = column[String]("description")
  def style = column[String]("style")

  def * = (name, date, clientMax, maleTicket, femaleTicket, description.?, style.?) <> (Event.tupled, Event.unapply)
}

object Events {
  val db = play.api.db.slick.DB
  val events = TableQuery[Events]
  def all: List[Event] = db.withSession { implicit session =>
    events.sortBy(_.name.asc).list
  }
  def create(event: Event): Boolean = db.withTransaction{ implicit session =>
    if (!events.filter(_.name === event.name).exists.run) {
      events += event
      true
    } else {false}
  }
  def find(name: String): Event = db.withSession{ implicit session =>
    events.filter(_.name === name).first
  }
  def update(updateEvent: Event): Int = db.withTransaction{ implicit session =>
    events.filter(_.name === updateEvent.name).update(updateEvent)
  }
  def delete(name: String): Int = db.withTransaction{ implicit session =>
    events.filter(_.name === name).delete
  }
}