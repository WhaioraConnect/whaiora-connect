import { Helmet } from 'react-helmet-async'
import { Card, CardHeader, CardTitle, CardContent } from '@components/ui/Card'
import { Users, FileText, Activity, TrendingUp } from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '2,543',
      change: '+12.5%',
      icon: Users,
      color: 'text-blue-600',
    },
    {
      title: 'Active Providers',
      value: '342',
      change: '+8.2%',
      icon: Activity,
      color: 'text-green-600',
    },
    {
      title: 'Bookings',
      value: '1,234',
      change: '+23.1%',
      icon: FileText,
      color: 'text-purple-600',
    },
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+15.3%',
      icon: TrendingUp,
      color: 'text-orange-600',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Whaiora Connect</title>
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">{stat.change}</span> from
                    last month
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b pb-4 last:border-0"
                >
                  <div>
                    <p className="font-medium">New provider registration</p>
                    <p className="text-sm text-muted-foreground">
                      Dr. Sarah Johnson registered as a provider
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {i} hours ago
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
