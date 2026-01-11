import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardContent } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { Badge } from '@components/ui/Badge'
import { Calendar, Clock, MapPin, Search } from 'lucide-react'

export default function SeekerDashboard() {
  const upcomingBookings = [
    {
      id: 1,
      provider: 'Dr. Sarah Johnson',
      service: 'General Consultation',
      date: '2026-01-15',
      time: '10:00 AM',
      location: 'Auckland CBD',
      status: 'confirmed',
    },
    {
      id: 2,
      provider: 'Michael Chen',
      service: 'Physiotherapy',
      date: '2026-01-18',
      time: '2:30 PM',
      location: 'Wellington',
      status: 'pending',
    },
  ]

  const quickActions = [
    {
      title: 'Find Services',
      description: 'Browse available healthcare services',
      icon: Search,
      href: '/dashboards/seeker/search',
    },
    {
      title: 'My Bookings',
      description: 'View and manage your appointments',
      icon: Calendar,
      href: '/dashboards/seeker/bookings',
    },
  ]

  return (
    <>
      <Helmet>
        <title>My Dashboard - Whaiora Connect</title>
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="text-muted-foreground">
            Manage your healthcare appointments and services
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2">
          {quickActions.map((action) => {
            const Icon = action.icon
            return (
              <Link key={action.title} to={action.href}>
                <Card className="transition-colors hover:bg-accent cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{action.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Upcoming Bookings */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Upcoming Appointments</CardTitle>
            <Link to="/dashboards/seeker/bookings">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {upcomingBookings.length > 0 ? (
              <div className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex flex-col gap-3 rounded-lg border p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">{booking.provider}</p>
                        <p className="text-sm text-muted-foreground">
                          {booking.service}
                        </p>
                      </div>
                      <Badge
                        variant={
                          booking.status === 'confirmed' ? 'success' : 'warning'
                        }
                      >
                        {booking.status}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(booking.date).toLocaleDateString('en-NZ', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {booking.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {booking.location}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="ghost" size="sm">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No upcoming appointments</p>
                <Link to="/dashboards/seeker/search">
                  <Button className="mt-4">Find Services</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  )
}